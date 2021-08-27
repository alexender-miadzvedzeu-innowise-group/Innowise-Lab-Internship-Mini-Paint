import { 
  GET_IMAGES_FROM_DB,
  GET_IMAGES_FROM_DB_SUCCEEDED,
  GET_IMAGES_FROM_DB_FAILED
} from './actions.types';

export const getimagesFromDbAC = () => ({ type: GET_IMAGES_FROM_DB})
export const getimagesFromDbSucceededAC = () => ({ type: GET_IMAGES_FROM_DB_SUCCEEDED})
export const getimagesFromDbFailedAC = () => ({ type: GET_IMAGES_FROM_DB_FAILED})