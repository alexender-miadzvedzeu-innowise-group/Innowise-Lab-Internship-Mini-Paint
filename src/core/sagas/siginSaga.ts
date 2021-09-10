import { takeEvery, put, call, all } from '@redux-saga/core/effects';
import { SIGN_IN_WITH_E_MAIL } from '../actions/actions.types';
import { signInWithEmailSucceededAC, signInWithEmailFailedAC } from '../actions/auth';
import { AnyAction } from 'redux';
import { signInUser } from '../services/firebase/auth';

export function* signInWithEmailFetchWorker(data: AnyAction) {
    const { payload } = data;
    let userData: { userName: string, userID: string} = {
        userName: '',
        userID: ''
    };

    try {
        yield signInUser(payload).then(data => {
            if (data.user && data.user?.email) {
                userData.userID = data.user?.uid;
                userData.userName = data.user?.email;
            }
        });
        yield put(signInWithEmailSucceededAC(userData));
    } catch (error) {
        yield put(signInWithEmailFailedAC(error));
    }
}

export function* signInWithEmailFetchAsyncWatcher() {
    yield takeEvery(SIGN_IN_WITH_E_MAIL, signInWithEmailFetchWorker);
}

export default function* signInSaga(): Generator {
    yield all([
        call(signInWithEmailFetchAsyncWatcher)
    ]);
}