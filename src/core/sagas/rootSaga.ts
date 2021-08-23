import { all, call } from 'redux-saga/effects';
import createUserSaga from './createUserSaga';
import signInSaga from './siginSaga';

export default function* rootSaga() {
    yield all([
        call(createUserSaga),
        call(signInSaga)
    ])
}