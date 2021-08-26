import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { SET_DATA_URL } from '../actions/editor';
import { AnyAction } from "redux";
import { db } from '../firebase/firebase'
import { uploadImageFailedAC, uploadImageSuccessedAC } from "../reducers/editorReducer";

export function* uploadImageFetch(dataUrl: AnyAction): Generator {
  try {
    const response = yield db.collection("images").doc("aaa").set({
      url: dataUrl
    })
    yield put(uploadImageSuccessedAC(response))
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