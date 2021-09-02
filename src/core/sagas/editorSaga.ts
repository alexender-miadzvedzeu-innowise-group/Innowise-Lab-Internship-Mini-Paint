import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { SET_DATA_URL } from '../actions/actions.types';
import { AnyAction } from "redux";
import { uploadImageFailedAC, uploadImageSuccessedAC } from "../../core/actions/editor";
import { uploadImage } from "../services/firebase/currentUserFetches"

export function* uploadImageFetch(payload: AnyAction): Generator {
  const {dataUrl, userName} = payload;
  const id = Date.now();
  try {
    const response = yield uploadImage(dataUrl, userName, id);
    yield put(uploadImageSuccessedAC(response));
  } catch (error) {
    yield put(uploadImageFailedAC(error))
  }
}

export function* watchUploadImageFetchAsync() {
    yield takeEvery(SET_DATA_URL, uploadImageFetch);
}

export default function* editorSaga(): any {
  yield all([
    call(watchUploadImageFetchAsync)
  ])
}