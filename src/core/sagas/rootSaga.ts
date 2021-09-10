import { all, call } from 'redux-saga/effects';
import createUserSaga from './createUserSaga';
import editorSaga from './editorSaga';
import signInSaga from './siginSaga';
import homeSaga from './homeSaga';
import profileSaga from './profileSaga';
import signOutSaga from './sigOutSaga';

export default function* rootSaga(): Generator {
    yield all([
        call(createUserSaga),
        call(signInSaga),
        call(editorSaga),
        call(homeSaga),
        call(profileSaga),
        call(signOutSaga),
    ]);
}