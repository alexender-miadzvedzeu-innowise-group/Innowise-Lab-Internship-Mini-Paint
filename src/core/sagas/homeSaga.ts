import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { GET_IMAGES_FROM_DB } from '../actions/actions.types';
import { AnyAction } from "redux";
import { getimagesFromDbSucceededAC, getimagesFromDbFailedAC } from "../actions/home";
import { db, storageRef } from '../firebase/firebase';

interface IDoc {
  data: () => never
}

export function* getImageFetch(payload: AnyAction): Generator {
  let data:[] = [];
  try {
    const fetchImages:any = yield db.collection('images').get();
    yield fetchImages.docs.map((doc: IDoc) => data.push(doc.data()));
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