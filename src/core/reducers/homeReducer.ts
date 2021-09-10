import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED,
  SORT_IMAGES_DATA
} from '../actions/actions.types';

interface Action {
  type: string,
  payload: [],
  userName: string,
  data: {}
};
type img = {
  index: number,
  map: (callback: (img: {imgUrl: string}, key: string) => JSX.Element) => [JSX.Element];
}
export interface IhomeState {
  loading: boolean,
  error: boolean,
  successed: boolean,
  imagesData: [],
  sortedImagesData: []
};

const initialState: IhomeState = {
  loading: false,
  error: false,
  successed: false,
  imagesData: [],
  sortedImagesData: []
};

export const homeReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case GET_IMAGES_FROM_DB:
      return {...state, loading: true, error: false, successed: false};
    case GET_IMAGES_FROM_DB_SUCCEEDED:
      return {...state, imagesData: action.payload};
    case GET_IMAGES_FROM_DB_FAILED:
      return {...state, loading: false, error: true, successed: false};
    case SORT_IMAGES_DATA:
      return {...state, sortedImagesData: action.data};
    default:
      return state;
  }
};

export default homeReducer;