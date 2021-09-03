import { db, storageRef, storage } from "../../firebase/firebase";

interface IDoc {
  data: () => never
}

export const getUserImages = async () => {
  let data:[] = [];
  const fetchImages:any = await db.collection('images').get();
  fetchImages.docs.map((doc: IDoc) => data.push(doc.data()));
  return data;
}

export const delUserImage = async (id: string | number, userID: string) => {
  await db.collection('images').doc(`${id}`).delete();
  const path = `library/${userID}/photo:${id}`;
  const imgRef: any = storageRef.child(path);
  await imgRef.delete();
}

export const uploadImage = async (dataUrl: string, userID: string, userName: StaticRangeInit, id: string | number) => {
  
  const path = `library/${userID}/photo:${id}`;
  const imgRef: any = storageRef.child(path);
  await imgRef.putString(dataUrl, 'data_url');
  const imgUrl = await storage.refFromURL(`gs://${process.env.REACT_APP_STORAGE_BUCKET}/${path}`).getDownloadURL()
  return db.collection("images").doc(id.toString()).set({
    imgUrl,
    userName,
    id
  })
}