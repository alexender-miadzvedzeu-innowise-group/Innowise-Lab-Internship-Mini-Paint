import { all, call } from 'redux-saga/effects';
import createUserSaga from './createUserSaga';
import editorSaga from './editorSaga';
import signInSaga from './siginSaga';
import homeSaga from './homeSaga';

export default function* rootSaga() {
    yield all([
        call(createUserSaga),
        call(signInSaga),
        call(editorSaga),
        call(homeSaga)
    ])
}