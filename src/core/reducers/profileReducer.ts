import { 
  GET_USER_NAME,
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED,
  DEL_CLICKED,
  DEL_USER_IMAGE_FROM_DB,
  DEL_USER_IMAGE_FROM_DB_SUCCEEDED,
  DEL_USER_IMAGE_FROM_DB_FAILED
} from '../actions/actions.types'
import { getCookie } from '../helpers/getCookie';

interface Action {
  type: string,
  payload: [],
  id: number | null
}

interface State {
  userName: string,
  loading: boolean,
  error: boolean,
  successed: boolean,
  delCicked: boolean,
  delConfurm: boolean,
  imagesData: [],
  idTodell: number | null
}

const initialState: State = {
  userName: '',
  loading: false,
  error: false,
  successed: false,
  delCicked: false,
  delConfurm: false,
  imagesData: [],
  idTodell: null
}

export const profileReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case GET_USER_NAME:
      return {...state, userName: JSON.parse(getCookie('user')).email.split('@').slice(0,1).join()};
    case GET_IMAGES_FROM_DB:
      return {...state, loading: true, error: false, successed: false, delCicked: false};
    case GET_IMAGES_FROM_DB_SUCCEEDED:
      return {...state, loading: false, imagesData: action.payload.filter((img: any) => img.userName === state.userName)};
    case GET_IMAGES_FROM_DB_FAILED:
      return {...state, loading: false};
    case DEL_CLICKED:
      return {...state, delCicked: !state.delCicked, idTodell: action.id}
    case DEL_USER_IMAGE_FROM_DB:
      return {...state, loading: true}
    case DEL_USER_IMAGE_FROM_DB_SUCCEEDED:
      console.log(state.idTodell, state.imagesData);
      return {...state, imagesData: state.imagesData.filter((img: any) => img.id !== state.idTodell), loading: false, delCicked: false, idToDel: null }
    case DEL_USER_IMAGE_FROM_DB_FAILED:
      return {...state, loading: false, delCicked: false}
    default:
      return state;
  }
}

export default profileReducer;