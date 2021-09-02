import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { GET_IMAGES_FROM_DB } from '../actions/actions.types';
import { AnyAction } from "redux";
import { getimagesFromDbSucceededAC, getimagesFromDbFailedAC } from "../actions/home";
import { getAllUsersImages } from "../services/firebase/allUsersFetches";

export function* getImageFetch(payload: AnyAction): Generator {
  try {
    const data = yield getAllUsersImages();
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