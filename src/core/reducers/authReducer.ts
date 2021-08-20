import { SIGN_IN_WITH_GOOGLE } from '../actions/signInWithGoogle'

interface Action {
  readonly type: string
}

interface State {
  isLogged: boolean
}

const initialState: State = {
  isLogged: false
}

export const authReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE:
      
      break;
  
    default:
      return state;
  }
  return state
}

export default authReducer;