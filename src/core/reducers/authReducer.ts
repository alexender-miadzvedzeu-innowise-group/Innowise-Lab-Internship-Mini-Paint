import {
  CREATE_USER_WITH_E_MAIL,
  CREATE_USER_WITH_E_MAIL_SUCCEEDED,
  CREATE_USER_WITH_E_MAIL_FAILED,
  SIGN_IN_WITH_E_MAIL,
  SIGN_IN_WITH_E_MAIL_SUCCEEDED,
  SIGN_IN_WITH_E_MAIL_FAILED,
  RESET_ERROR_MESSAGE,
  SET_LOCAL_USER_ERROR_MESSAGE,
  SIGN_OUT_SUCCEEDED,
  SIGN_OUT_FAILED,
  SET_LOGGED
} from '../actions/actions.types';

interface Action {
  type: string,
  payload: {} | any,
  error?: any,
  userName: string,
  userID: string
}

export interface IauthState {
  loading: boolean,
  error: boolean,
  isLoged: boolean,
  errorMessage: string | null,
  userName: string,
  userID: string
}

const initialState: IauthState = {
  loading: false,
  error: false,
  isLoged: false,
  errorMessage: null,
  userName: '',
  userID: ''
};

export const authReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case SET_LOGGED:
      return {...state, isLoged: true, userName: action.userName, userID: action.userID};
    case CREATE_USER_WITH_E_MAIL:
      return {...state, loading: true, error: false};
    case CREATE_USER_WITH_E_MAIL_SUCCEEDED:
      return {...state, loading: false, error: false, isLoged: true};
    case CREATE_USER_WITH_E_MAIL_FAILED:
      return {...state, loading: false, error: true, errorMessage: action.error.message};
    case SIGN_IN_WITH_E_MAIL:
      return {...state, loading: true, error: false};
    case SIGN_IN_WITH_E_MAIL_SUCCEEDED:
      return {...state, loading: false, error: false, isLoged: true, userName: action.payload.userName, userID: action.payload.userID};
    case SIGN_IN_WITH_E_MAIL_FAILED:
      return {...state, loading: false, error: true, errorMessage: action.error.message};
    case SIGN_OUT_SUCCEEDED:
      return {...state, isLoged: false};
    case SIGN_OUT_FAILED:
      return {...state, error: action.error};
    case RESET_ERROR_MESSAGE:
      if (state.error) {
        return {...state, error: false, errorMessage: null};
      } else return state;
    case SET_LOCAL_USER_ERROR_MESSAGE:
      return {...state, error: true, errorMessage: action.error};
    default:
      return state;
  }
};

export default authReducer;