import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import { SIGN_IN_WITH_E_MAIL } from '../actions/actions.types';
import { signInWithEmailSucceededAC, signInWithEmailFailedAC } from '../actions/auth'
import { AnyAction } from "redux";
import firebase from "../firebase/firebase";

interface FirebaseSignInResonse {
    userCredentional?: any
}

export function* signInWithEmailFetch(data: AnyAction) {
    const { payload } = data;
    try {
        const response: FirebaseSignInResonse = yield firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
        yield put(signInWithEmailSucceededAC(response));
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