import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { SET_DATA_URL } from '../actions/actions.types';
import { AnyAction } from "redux";
import { uploadImageFailedAC, uploadImageSuccessedAC } from "../../core/actions/editor";
import { db, storage, storageRef } from '../firebase/firebase';

export function* uploadImageFetch(payload: AnyAction): Generator {
  const {dataUrl, imgName, userName} = payload;
  try {
    const path = `library/${userName}/photo:${Date.now()}`;
    const imgRef = yield storageRef.child(path);
    //@ts-ignore
    yield imgRef.putString(dataUrl, 'data_url');
    const imgUrl = yield storage.refFromURL(`gs://${process.env.REACT_APP_STORAGE_BUCKET}/${path}`).getDownloadURL()
    const response = yield db.collection("images").doc(imgName.toString()).set({
      imgUrl,
      userName
    })
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