import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import { SIGN_IN_WITH_E_MAIL } from '../actions/actions.types';
import { signInWithEmailSucceededAC, signInWithEmailFailedAC } from '../actions/auth'
import { AnyAction } from "redux";
import { signInUser } from '../services/firebase/authFetches'
import { sliceUserNameFromEmail } from '../helpers/sliceUserNameFromEmail';

interface FirebaseSignInResonse {
    userCredentional?: any
    user: {uid: string, email: string}
}

export function* signInWithEmailFetch(data: AnyAction) {
    const { payload } = data;
    let userData: { userName: string, userID: string} = {
        userName: '',
        userID: ''
    }

    try {
        yield signInUser(payload).then(data => {
            if (data.user && data.user?.email) {
                userData.userID = data.user?.uid
                userData.userName = sliceUserNameFromEmail(data.user?.email)
            }
        })
        yield put(signInWithEmailSucceededAC(userData));
    } catch (error) {
        yield put(signInWithEmailFailedAC(error));
    }
}

export function* watchSignInWithEmailFetchAsync() {
    yield takeEvery(SIGN_IN_WITH_E_MAIL, signInWithEmailFetch);
}

export default function* signInSaga(): any {
    yield all([
        call(watchSignInWithEmailFetchAsync)
    ])
}