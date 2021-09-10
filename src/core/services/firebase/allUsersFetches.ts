import { db } from '../../firebase/firebase';

interface IDoc {
  data: () => never
}

export const getAllUsersImages = async () => {
  let data:[] = [];
  const fetchImages:any = await db.collection('users').get();
  fetchImages.docs.map((doc: IDoc) => {
    data.push(doc.data());
  });
  return data;
};