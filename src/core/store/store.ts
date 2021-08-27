import { createStore, combineReducers, applyMiddleware } from "redux"
import authReducer from '../reducers/authReducer';
import editorReducer from "../reducers/editorReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
  authReducer,
  editorReducer,
  
}),applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;