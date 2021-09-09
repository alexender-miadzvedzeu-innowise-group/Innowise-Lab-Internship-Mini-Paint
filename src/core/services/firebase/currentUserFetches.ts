import firebase, { db, storageRef, storage } from '../../firebase/firebase';

interface IDoc {
  data: () => never
}

export const getUserImages = async (userID: string, userName: string) => {
  let images:[] = [];
  const imagesRef = await db.collection('users').doc(userID);
  await imagesRef.get().then((doc) => {
    const payload = doc.data();
    if (payload) return images = payload[userName];
  });
  return images;
};

export const delUserImage = async (id: string, userID: string, imgUrl: string, userName: string) => {
  await db.collection('users').doc(userID.toString());
  db.collection('users').doc(userID.toString()).update({
    [userName]: firebase.firestore.FieldValue.arrayRemove({id, imgUrl})
  });  
  const path = `library/${userID}/photo:${id}`;
  const imgRef: {delete: () => void} = storageRef.child(path);
  await imgRef.delete();
};

export const uploadImage = async (dataUrl: string, userID: string, userName: string, id: string) => {
  const path = `library/${userID}/photo:${id}`;
  const imgRef: {putString: (dataUrl: string, name: string) => void} = storageRef.child(path);
  await imgRef.putString(dataUrl, 'data_url');
  const imgUrl = await storage.refFromURL(`gs://${process.env.REACT_APP_STORAGE_BUCKET}/${path}`).getDownloadURL();
  const uploadImageToDB = () => db.collection('users').doc(userID.toString()).update({
    [userName]: firebase.firestore.FieldValue.arrayUnion({imgUrl, id})
  });

  db.collection('users').doc(userID.toString()).get().then(doc =>{
    if(doc.exists) {
      uploadImageToDB();
    } else {
      db.collection('users').doc(userID.toString()).set({});
      uploadImageToDB();
    }
  });
};