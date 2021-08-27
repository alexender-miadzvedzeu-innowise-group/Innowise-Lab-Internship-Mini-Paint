import { 
  CREATE_USER_WITH_E_MAIL, 
  CREATE_USER_WITH_E_MAIL_SUCCEEDED, 
  CREATE_USER_WITH_E_MAIL_FAILED, 
  SIGN_IN_WITH_E_MAIL,
  SIGN_IN_WITH_E_MAIL_SUCCEEDED,
  SIGN_IN_WITH_E_MAIL_FAILED,
  SIGN_OUT,
  CHECK_USER_AFTORIZATION
} from './actions.types';

export const createUserWithEmailAC = (payload: any) => ({ type: CREATE_USER_WITH_E_MAIL, payload})
export const createUserWithEmailSucceededAC = (payload: any) => ({ type: CREATE_USER_WITH_E_MAIL_SUCCEEDED, payload})
export const createUserWithEmailFailedAC = (error: any) => ({ type: CREATE_USER_WITH_E_MAIL_FAILED, error})

export const signInWithEmailAC = (payload: any) => ({ type: SIGN_IN_WITH_E_MAIL, payload})
export const signInWithEmailSucceededAC = (payload: any) => ({ type: SIGN_IN_WITH_E_MAIL_SUCCEEDED, payload})
export const signInWithEmailFailedAC = (error: any) => ({ type: SIGN_IN_WITH_E_MAIL_FAILED, error})

export const signOutAC = () => ({ type: SIGN_OUT})
export const checkUserAftorizationAC = () => ({ type: CHECK_USER_AFTORIZATION})