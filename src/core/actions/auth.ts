import {
  CREATE_USER_WITH_E_MAIL, 
  CREATE_USER_WITH_E_MAIL_SUCCEEDED, 
  CREATE_USER_WITH_E_MAIL_FAILED, 
  SIGN_IN_WITH_E_MAIL,
  SIGN_IN_WITH_E_MAIL_SUCCEEDED,
  SIGN_IN_WITH_E_MAIL_FAILED,
  SIGN_OUT,
  SIGN_OUT_SUCCEEDED,
  SIGN_OUT_FAILED,
  CHECK_USER_AFTORIZATION,
  RESET_ERROR_MESSAGE,
  SET_LOCAL_USER_ERROR_MESSAGE,
  SET_LOGGED
} from './actions.types';
import { IauthError, IauthPayload } from '../interfaces/Iauth';

export const createUserWithEmailAC = (payload:{email:string, password: string}) => ({ type: CREATE_USER_WITH_E_MAIL, payload});
export const createUserWithEmailSucceededAC = (payload: any) => ({ type: CREATE_USER_WITH_E_MAIL_SUCCEEDED, payload});
export const createUserWithEmailFailedAC = (error: any) => ({ type: CREATE_USER_WITH_E_MAIL_FAILED, error});

export const signInWithEmailAC = (payload:{email:string, password: string}) => ({ type: SIGN_IN_WITH_E_MAIL, payload});
export const signInWithEmailSucceededAC = (payload: { userName: string, userID: string}) => ({ type: SIGN_IN_WITH_E_MAIL_SUCCEEDED, payload});
export const signInWithEmailFailedAC = (error: any) => ({ type: SIGN_IN_WITH_E_MAIL_FAILED, error});
export const resetErrorMessageAC = () => ({ type: RESET_ERROR_MESSAGE });
export const setLocalUserErrorMessageAC = (error: string) => ({ type: SET_LOCAL_USER_ERROR_MESSAGE, error });

export const setLoggedAC = (userName: string, userID: string) => ({type: SET_LOGGED, userName, userID});

export const signOutAC = () => ({ type: SIGN_OUT });
export const signOutACSucceededAC = (payload: any) => ({ type: SIGN_OUT_SUCCEEDED, payload });
export const signOutACFailedAC = (error: any) => ({ type: SIGN_OUT_FAILED, error });

export const checkUserAftorizationAC = () => ({ type: CHECK_USER_AFTORIZATION});