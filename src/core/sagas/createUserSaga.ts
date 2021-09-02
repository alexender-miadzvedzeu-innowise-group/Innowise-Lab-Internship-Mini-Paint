import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import { CREATE_USER_WITH_E_MAIL } from '../actions/actions.types';
import { createUserWithEmailSucceededAC, createUserWithEmailFailedAC } from '../../core/actions/auth'
import { AnyAction } from "redux";
import firebase from "../firebase/firebase";

interface FirebaseCreateUserResonse {
    userCredentional?: any
}

export function* createUserWithEmailFetch(data: AnyAction) {
    const { payload } = data;
    try {
        const response: FirebaseCreateUserResonse = yield firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
        yield put(createUserWithEmailSucceededAC(response));
    } catch (error) {
        yield put(createUserWithEmailFailedAC(error));
    }
}

export function* createUserWithEmailFetchAsync() {
    yield takeEvery(CREATE_USER_WITH_E_MAIL, createUserWithEmailFetch);
}

export default function* createUserSaga(): any {
    yield all([
        call(createUserWithEmailFetchAsync)
    ])
}