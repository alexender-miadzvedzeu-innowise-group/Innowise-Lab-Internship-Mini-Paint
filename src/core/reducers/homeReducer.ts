import { ImageAspectRatio } from '@material-ui/icons';
import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED
} from '../actions/actions.types'

interface Action {
  type: string,
  payload: []
}

interface State {
  loading: boolean,
  error: boolean,
  successed: boolean,
  imagesData: {}
}

const initialState: State = {
  loading: false,
  error: false,
  successed: false,
  imagesData: {}
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
      default:
      return state;
  }
}

export default homeReducer;