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
  CHECK_USER_AFTORIZATION
} from '../actions/actions.types'

interface Action {
  readonly type: string
  readonly payload: {} | any
  error?: any
}

interface State {
  loading: boolean
  error: boolean
  isLoged: boolean
}

const initialState: State = {
  loading: false,
  error: false,
  isLoged: false
}

export const authReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case CREATE_USER_WITH_E_MAIL:
      return {...state, loading: true, error: false}
    case CREATE_USER_WITH_E_MAIL_SUCCEEDED:
      setCookie('user', JSON.stringify(action.payload.user), 60)
      return {...state, loading: false, error: false, isLoged: true}
    case CREATE_USER_WITH_E_MAIL_FAILED:
      return {...state, loading: false, error: true}
    case SIGN_IN_WITH_E_MAIL:
      return {...state, loading: true, error: false}
    case SIGN_IN_WITH_E_MAIL_SUCCEEDED:
      setCookie('user', JSON.stringify(action.payload.user), 60)
      return {...state, loading: false, error: false, isLoged: true}
    case SIGN_IN_WITH_E_MAIL_FAILED:
      return {...state, loading: false, error: true}
    case SIGN_OUT:
      delCookie('user');
      return {...state, isLoged: false}
    case CHECK_USER_AFTORIZATION:
      if (getCookie('user')) {
        return {...state, isLoged: true}
      } else {
        return {...state, isLoged: false}
      }
    default:
      return state;
  }
}

export default authReducer;