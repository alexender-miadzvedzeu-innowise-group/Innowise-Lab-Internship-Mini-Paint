import { takeEvery, call, all, put } from '@redux-saga/core/effects';
import { GET_IMAGES_FROM_DB } from '../actions/actions.types';

import { getimagesFromDbSucceededAC, getimagesFromDbFailedAC } from '../actions/home';
import { getAllUsersImages } from '../services/firebase/allUsersFetches';

type Idata = [
  {
    [key: string]: [{
      [key: string]: string
    }]
  }
]
export function* getImageFetchWorker(): Generator {
  try {
    const data: any = yield call(getAllUsersImages);
    yield put(getimagesFromDbSucceededAC(data));
  } catch (error) {
    yield put(getimagesFromDbFailedAC(error));
  }
}

export function* getImageFetchAsyncWatcher() {
  yield takeEvery(GET_IMAGES_FROM_DB, getImageFetchWorker);
}

export default function* homeSaga(): Generator {
  yield all([
    call(getImageFetchAsyncWatcher)
  ]);
}