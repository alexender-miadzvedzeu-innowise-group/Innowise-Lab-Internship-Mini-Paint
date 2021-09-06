import { 
  GET_USER_IMAGES_FROM_DB,
  GET_USER_IMAGES_FROM_DB_SUCCEEDED,
  GET_USER_IMAGES_FROM_DB_FAILED,
  DEL_CLICKED,
  DEL_USER_IMAGE_FROM_DB,
  DEL_USER_IMAGE_FROM_DB_SUCCEEDED,
  DEL_USER_IMAGE_FROM_DB_FAILED,
} from '../actions/actions.types';

interface Action {
  type: string,
  payload: [],
  id: number | null,
  userName: string
}

interface IprofileState {
  loading: boolean,
  error: boolean,
  successed: boolean,
  delCicked: boolean,
  delConfurm: boolean,
  imagesData: [],
  idTodell: number | null
}

const initialState: IprofileState = {
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
    case GET_USER_IMAGES_FROM_DB:
      return {...state, loading: true, error: false, successed: false, delCicked: false};
    case GET_USER_IMAGES_FROM_DB_SUCCEEDED:
      console.log(action.payload);
      return {...state, loading: false, imagesData: action.payload };
    case GET_USER_IMAGES_FROM_DB_FAILED:
      return {...state, loading: false};
    case DEL_CLICKED:
      return {...state, delCicked: !state.delCicked, idTodell: action.id}
    case DEL_USER_IMAGE_FROM_DB:
      return {...state, loading: true}
    case DEL_USER_IMAGE_FROM_DB_SUCCEEDED:
      return {...state, imagesData: state.imagesData.filter((img: any) => img.id !== state.idTodell), loading: false, delCicked: false, idToDel: null }
    case DEL_USER_IMAGE_FROM_DB_FAILED:
      return {...state, loading: false, delCicked: false}
    default:
      return state;
  }
}

export default profileReducer;