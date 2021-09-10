import { takeEvery, put, call, all } from '@redux-saga/core/effects';
import { SIGN_OUT } from '../actions/actions.types';
import { signOutACSucceededAC, signOutACFailedAC } from '../actions/auth';
import { signOutUser } from '../services/firebase/auth';

export function* signOutFetchAsyncWorker() {
    try {
        yield call(signOutUser);
        yield put(signOutACSucceededAC());
    } catch (error) {
        yield put(signOutACFailedAC(error));
    };
}

export function* signOutFetchAsyncWatcher() {
    yield takeEvery(SIGN_OUT, signOutFetchAsyncWorker);
}

export default function* signOutSaga(): Generator {
    yield all([
        call(signOutFetchAsyncWatcher)
    ]);
}