import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED,
  SORT_IMAGES_DATA
} from './actions.types';

export const getimagesFromDbAC = () => ({ type: GET_IMAGES_FROM_DB})
export const getimagesFromDbSucceededAC = (payload: any) => ({ type: GET_IMAGES_FROM_DB_SUCCEEDED, payload})
export const getimagesFromDbFailedAC = (payload: any) => ({ type: GET_IMAGES_FROM_DB_FAILED, payload})
export const sortImagesDataAC = (userName: string) => ({ type: SORT_IMAGES_DATA, userName})