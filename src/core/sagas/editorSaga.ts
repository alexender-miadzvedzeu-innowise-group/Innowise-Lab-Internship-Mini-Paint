import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { SET_DATA_URL } from '../actions/editor';
import { AnyAction } from "redux";
import { db } from '../firebase/firebase'
import { uploadImageFailedAC, uploadImageSuccessedAC } from "../reducers/editorReducer";

export function* uploadImageFetch(dataUrl: AnyAction) {
  const response = db.collection("images").doc("aaa").set({
    url: 'dataUrl'
  })
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 2000);
  })
  try {
    // yield response
    yield promise
    yield put(uploadImageSuccessedAC(promise))
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