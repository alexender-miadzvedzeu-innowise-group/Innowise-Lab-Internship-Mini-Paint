import { takeEvery, call, all, put } from '@redux-saga/core/effects';
import { GET_USER_IMAGES_FROM_DB, DEL_USER_IMAGE_FROM_DB } from '../actions/actions.types';
import { AnyAction } from 'redux';
import { getUserImagesFromDbSucceededAC, getUserImagesFromDbFailedAC, delUserImageFromDbSucceededAC, delUserImageFromDbFailedAC } from '../actions/profile';
import { delUserImage, getUserImages } from '../services/firebase/currentUserFetches';
import { sortUserImages } from '../helpers/sortUserImages';


export function* getUserImageFetchWorker(payload: AnyAction): Generator {
  try {
    const data = yield call(getUserImages);
    const sortedData = yield call(sortUserImages, data, payload.userName);
    yield put(getUserImagesFromDbSucceededAC(sortedData));
  } catch (error) {
    yield put(getUserImagesFromDbFailedAC(error));
  }
}

export function* delImageFetchWorker(payload: AnyAction): Generator {
  const { id, userName } = payload;
  try {
    yield call(delUserImage, id, userName);
    yield put(delUserImageFromDbSucceededAC());
  } catch (error) {
    yield put(delUserImageFromDbFailedAC(error));
  }
}

export function* delImageFetchAsyncWatcher() {
  yield takeEvery(DEL_USER_IMAGE_FROM_DB, delImageFetchWorker);
}

export function* getUserImageFetchAsyncWatcher() {
  yield takeEvery(GET_USER_IMAGES_FROM_DB, getUserImageFetchWorker);
}

export default function* profileSaga(): any {
  yield all([
    call(getUserImageFetchAsyncWatcher),
    call(delImageFetchAsyncWatcher)
  ]);
}