import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { GET_USER_IMAGES_FROM_DB, DEL_USER_IMAGE_FROM_DB } from '../actions/actions.types';
import { AnyAction } from "redux";
import { getUserImagesFromDbSucceededAC, getUserImagesFromDbFailedAC, delUserImageFromDbSucceededAC, delUserImageFromDbFailedAC, delUserImageFromDbAC } from "../actions/profile";
import { delUserImage, getUserImages } from "../services/firebase/currentUserFetches";

interface IDoc {
  data: () => never
}

export function* getUserImageFetch(payload: AnyAction): Generator {
  try {
    const data = yield getUserImages()
    yield put(getUserImagesFromDbSucceededAC(data));
  } catch (error) {
    yield put(getUserImagesFromDbFailedAC(error))
  }
}

export function* delImageFetch(payload: AnyAction): Generator {
  const { id, userName } = payload;
  try {
    yield delUserImage(id, userName)
    yield put(delUserImageFromDbSucceededAC())
  } catch (error) {
    yield put(delUserImageFromDbFailedAC(error))
  }
}

export function* watchgdelImageFetchAsync() {
  yield takeEvery(DEL_USER_IMAGE_FROM_DB, delImageFetch)
}

export function* watchgetUserImageFetchAsync() {
  yield takeEvery(GET_USER_IMAGES_FROM_DB, getUserImageFetch);
}

export default function* profileSaga(): any {
  yield all([
    call(watchgetUserImageFetchAsync),
    call(watchgdelImageFetchAsync)
  ])
}