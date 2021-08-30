import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED
} from './actions.types';

export const getimagesFromDbAC = () => ({ type: GET_IMAGES_FROM_DB})
export const getimagesFromDbSucceededAC = (payload: any) => ({ type: GET_IMAGES_FROM_DB_SUCCEEDED, payload})
export const getimagesFromDbFailedAC = (payload: any) => ({ type: GET_IMAGES_FROM_DB_FAILED})