import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import { SIGN_OUT } from '../actions/actions.types';
import { signOutACSucceededAC, signOutACFailedAC } from '../actions/auth'
import { signOutUser } from '../services/firebase/authFetches';

interface FirebaseSignOutResonse {
    userCredentional?: any
}

export function* signOutFetchAsync() {
    try {
        const response: FirebaseSignOutResonse =  yield call(signOutUser)
        yield put(signOutACSucceededAC(response));
    } catch (error) {
        yield put(signOutACFailedAC(error));
    }
}

export function* watchSignOutFetchAsync() {
    yield takeEvery(SIGN_OUT, signOutFetchAsync);
}

export default function* signOutSaga(): any {
    yield all([
        call(watchSignOutFetchAsync)
    ])
}