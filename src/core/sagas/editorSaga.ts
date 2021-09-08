import { takeEvery, call, all, put } from '@redux-saga/core/effects';
import { SET_DATA_URL } from '../actions/actions.types';
import { AnyAction } from 'redux';
import { uploadImageFailedAC, uploadImageSuccessedAC } from '../../core/actions/editor';
import { uploadImage } from '../services/firebase/currentUserFetches';

export function* uploadImageFetchWorker(payload: AnyAction): Generator {
  const {dataUrl, userID, userName} = payload;
  const id = Date.now().toString();
  try {
    const response = yield call(uploadImage, dataUrl, userID, userName, id);
    yield put(uploadImageSuccessedAC(response));
  } catch (error) {
    yield put(uploadImageFailedAC(error));
  }
}

export function* uploadImageFetchAsyncWatcher() {
    yield takeEvery(SET_DATA_URL, uploadImageFetchWorker);
}

export default function* editorSaga(): any {
  yield all([
    call(uploadImageFetchAsyncWatcher)
  ]);
}