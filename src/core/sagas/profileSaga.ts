import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { GET_USER_IMAGES_FROM_DB, DEL_USER_IMAGE_FROM_DB } from '../actions/actions.types';
import { AnyAction } from "redux";
import { getUserImagesFromDbSucceededAC, getUserImagesFromDbFailedAC, delUserImageFromDbSucceededAC, delUserImageFromDbFailedAC, delUserImageFromDbAC } from "../actions/profile";
import { db, storageRef } from '../firebase/firebase';

interface IDoc {
  data: () => never
}

export function* getUserImageFetch(payload: AnyAction): Generator {
  let data:[] = [];
  try {
    const fetchImages:any = yield db.collection('images').get();
    yield fetchImages.docs.map((doc: IDoc) => data.push(doc.data()));
    yield put(getUserImagesFromDbSucceededAC(data));
  } catch (error) {
    yield put(getUserImagesFromDbFailedAC(error))
  }
}

export function* delImageFetch(payload: AnyAction): Generator {
  const { id, userName } = payload;
  try {
    yield db.collection('images').doc(`${id}`).delete();
    const path = `library/${userName}/photo:${id}`;
    const imgRef: any = yield storageRef.child(path);
    yield imgRef.delete();
    yield put(delUserImageFromDbSucceededAC())
  } catch (error) {
    yield put(delUserImageFromDbFailedAC(error))
  }
}

export function* watchgdelImageFetchAsync() {
  yield takeEvery(DEL_USER_IMAGE_FROM_DB, delImageFetch)
}

export function* watchgetUserImageFetchAsync() {
  yield takeEvery(GET_USER_IMAGES_FROM_DB, getUserImageFetch);
}

export default function* profileSaga(): any {
  yield all([
    call(watchgetUserImageFetchAsync),
    call(watchgdelImageFetchAsync)
  ])
}