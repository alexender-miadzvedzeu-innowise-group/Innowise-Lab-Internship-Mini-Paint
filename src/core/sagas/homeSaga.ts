import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { GET_IMAGES_FROM_DB } from '../actions/actions.types';
import { AnyAction } from "redux";
import { getimagesFromDbSucceededAC, getimagesFromDbFailedAC } from "../actions/home";
import { db, storageRef } from '../firebase/firebase';

export function* getImageFetch(payload: AnyAction): Generator {
  let data:[] = [];
  try {
    const fetchImages:any = yield db.collection('images').get();
    //@ts-ignore
    yield fetchImages.docs.map((doc) => data.push(doc.data()));
    //@ts-ignore
    yield put(getimagesFromDbSucceededAC(data));
  } catch (error) {
    yield put(getimagesFromDbFailedAC(error))
  }
}

export function* watchgetImageFetchAsync() {
    yield takeEvery(GET_IMAGES_FROM_DB, getImageFetch);
}

export default function* homeSaga(): any {
  yield all([
    call(watchgetImageFetchAsync)
  ])
}