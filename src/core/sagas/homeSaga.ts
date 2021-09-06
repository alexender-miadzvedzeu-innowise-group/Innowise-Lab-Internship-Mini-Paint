import { takeEvery, call, all, put } from "@redux-saga/core/effects";
import { GET_IMAGES_FROM_DB } from '../actions/actions.types';
import { AnyAction } from "redux";
import { getimagesFromDbSucceededAC, getimagesFromDbFailedAC } from "../actions/home";
import { getAllUsersImages } from "../services/firebase/allUsersFetches";
import { devideImages } from "../helpers/devideImages";

export function* getImageFetchWorker(payload: AnyAction): Generator {
  try {
    const data = yield call(getAllUsersImages);
    const devidedData = yield call(devideImages, data);
    yield put(getimagesFromDbSucceededAC(devidedData));
  } catch (error) {
    yield put(getimagesFromDbFailedAC(error))
  }
}

export function* getImageFetchAsyncWatcher() {
  yield takeEvery(GET_IMAGES_FROM_DB, getImageFetchWorker);
}

export default function* homeSaga(): any {
  yield all([
    call(getImageFetchAsyncWatcher)
  ])
}