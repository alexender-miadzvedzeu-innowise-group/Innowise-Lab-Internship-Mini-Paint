import { setCookie } from '../helpers/setCookie';
import { getCookie } from '../helpers/getCookie';
import { delCookie } from '../helpers/delCookie';

import {
  CREATE_USER_WITH_E_MAIL,
  CREATE_USER_WITH_E_MAIL_SUCCEEDED,
  CREATE_USER_WITH_E_MAIL_FAILED,
  SIGN_IN_WITH_E_MAIL,
  SIGN_IN_WITH_E_MAIL_SUCCEEDED,
  SIGN_IN_WITH_E_MAIL_FAILED,
  SIGN_OUT,
  CHECK_USER_AFTORIZATION,
  RESET_ERROR_MESSAGE,
  SET_LOCAL_USER_ERROR_MESSAGE
} from '../actions/actions.types'

interface Action {
  readonly type: string,
  readonly payload: {} | any,
  error?: any
}

interface State {
  loading: boolean,
  error: boolean,
  isLoged: boolean,
  errorMessage: string | null
}

const initialState: State = {
  loading: false,
  error: false,
  isLoged: false,
  errorMessage: null
}

export const authReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case CREATE_USER_WITH_E_MAIL:
      return {...state, loading: true, error: false}
    case CREATE_USER_WITH_E_MAIL_SUCCEEDED:
      setCookie('user', JSON.stringify(action.payload.user.email), 60)
      setCookie('userID', JSON.stringify(action.payload.user.uid), 60)
      return {...state, loading: false, error: false, isLoged: true}
    case CREATE_USER_WITH_E_MAIL_FAILED:
      return {...state, loading: false, error: true, errorMessage: action.error.message}
    case SIGN_IN_WITH_E_MAIL:
      return {...state, loading: true, error: false}
    case SIGN_IN_WITH_E_MAIL_SUCCEEDED:
      setCookie('user', JSON.stringify(action.payload.user.email), 60)
      setCookie('userID', JSON.stringify(action.payload.user.uid), 60)
      return {...state, loading: false, error: false, isLoged: true}
    case SIGN_IN_WITH_E_MAIL_FAILED:
      return {...state, loading: false, error: true, errorMessage: action.error.message}
    case SIGN_OUT:
      delCookie('user');
      delCookie('userID');
      return {...state, isLoged: false}
    case CHECK_USER_AFTORIZATION:
      if (getCookie('userID')) {
        return {...state, isLoged: true}
      } else {
        return {...state, isLoged: false}
      }
    case RESET_ERROR_MESSAGE:
      if (state.error) {
        return {...state, error: false, errorMessage: null}
      } else return state
    case SET_LOCAL_USER_ERROR_MESSAGE:
      return {...state, error: true, errorMessage: action.error}
    default:
      return state;
  }
}

export default authReducer;