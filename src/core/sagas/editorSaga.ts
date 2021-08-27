import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { SET_DATA_URL } from '../actions/actions.types';
import { AnyAction } from "redux";
import { uploadImageFailedAC, uploadImageSuccessedAC } from "../../core/actions/editor";
import { db } from '../firebase/firebase';

export function* uploadImageFetch(payload: AnyAction): Generator {
  const {dataUrl, imgName, userID} = payload;
  try {
    const response = yield db.collection("images").doc(imgName.toString()).set({
      dataUrl,
      userID
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