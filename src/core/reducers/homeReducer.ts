import { ImageAspectRatio } from '@material-ui/icons';
import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED,
  SORT_IMAGES_DATA
} from '../actions/actions.types'

interface Action {
  type: string,
  payload: [],
  userName: string
}

interface State {
  loading: boolean,
  error: boolean,
  successed: boolean,
  imagesData: {},
  sortedImagesData: {}
}

const initialState: State = {
  loading: false,
  error: false,
  successed: false,
  imagesData: {},
  sortedImagesData: {}
}


export const homeReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case GET_IMAGES_FROM_DB:
      return {...state, loading: true, error: false, successed: false}
    case GET_IMAGES_FROM_DB_SUCCEEDED:
      let sortedData: any = {};
      action.payload.forEach((img:any) => {
        if (sortedData[img.userName]) {
          sortedData[img.userName].push(img.imgUrl);
        } else {
          sortedData[img.userName] = [];
          sortedData[img.userName].push(img.imgUrl);
        }
      })
      return {...state, imagesData: sortedData};
    case GET_IMAGES_FROM_DB_FAILED:
      return {...state, loading: false, error: true, successed: false}
    case SORT_IMAGES_DATA:
      let index = action.userName.length;
      let sortedImagesData: any = {};
      Object.keys(state.imagesData).forEach((user: string) => {
        if (user.substr(0, index) === action.userName) {
          //@ts-ignore
          sortedImagesData[user] = state.imagesData[user]
        }
      })
      return {...state, sortedImagesData: sortedImagesData}
    default:
      return state;
  }
}

export default homeReducer;