import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED
} from '../actions/actions.types'

interface Action {
  type: string
}

interface State {
  loading: boolean,
  error: boolean,
  successed: boolean
}

const initialState: State = {
  loading: false,
  error: false,
  successed: false
}

export const homeReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case GET_IMAGES_FROM_DB:
      return {...state, loading: true, error: false, successed: false}
    case GET_IMAGES_FROM_DB_SUCCEEDED:
      return {...state, loading: false, error: false, successed: true}
    case GET_IMAGES_FROM_DB_FAILED:
      return {...state, loading: false, error: true, successed: false}
      default:
      return state;
  }
}

export default homeReducer;