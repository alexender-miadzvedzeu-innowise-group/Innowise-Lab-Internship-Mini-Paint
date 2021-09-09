import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED,
  SORT_IMAGES_DATA
} from './actions.types';

export const getimagesFromDbAC = () => ({ type: GET_IMAGES_FROM_DB});
export const getimagesFromDbSucceededAC = (payload: object | unknown) => ({ type: GET_IMAGES_FROM_DB_SUCCEEDED, payload});
export const getimagesFromDbFailedAC = (payload: {code:string, message: string} | unknown) => ({ type: GET_IMAGES_FROM_DB_FAILED, payload});
export const sortImagesDataAC = (data: object) => ({ type: SORT_IMAGES_DATA, data});