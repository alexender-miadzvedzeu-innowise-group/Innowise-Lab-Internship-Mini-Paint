import { takeEvery, put, call, all } from '@redux-saga/core/effects';
import { CREATE_USER_WITH_E_MAIL } from '../actions/actions.types';
import { createUserWithEmailSucceededAC, createUserWithEmailFailedAC } from '../../core/actions/auth';
import { AnyAction } from 'redux';
import { createUser } from '../services/firebase/authFetches';

interface FirebaseCreateUserResonse {
    userID: string,
    userName: string
}

export function* createUserWithEmailFetchWorker(data: AnyAction) {
    const { payload } = data;
    try {
        const response: FirebaseCreateUserResonse = yield call(createUser, payload);
        yield put(createUserWithEmailSucceededAC(response));
    } catch (error) {
        yield put(createUserWithEmailFailedAC(error));
    }
}

export function* createUserWithEmailFetchAsyncWatcher() {
    yield takeEvery(CREATE_USER_WITH_E_MAIL, createUserWithEmailFetchWorker);
}

export default function* createUserSaga(): Generator {
    yield all([
        call(createUserWithEmailFetchAsyncWatcher)
    ]);
}