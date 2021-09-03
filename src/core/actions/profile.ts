import { 
  GET_USER_NAME,
  GET_USER_IMAGES_FROM_DB,
  GET_USER_IMAGES_FROM_DB_SUCCEEDED,
  GET_USER_IMAGES_FROM_DB_FAILED,
  DEL_CLICKED,
  DEL_USER_IMAGE_FROM_DB,
  DEL_USER_IMAGE_FROM_DB_SUCCEEDED,
  DEL_USER_IMAGE_FROM_DB_FAILED,
  GET_USER_ID
} from './actions.types';

export const getUserNameAC = () => ({ type: GET_USER_NAME});
export const getUserIDAC = () => ({ type: GET_USER_ID});
export const getUserImagesFromDbAC = () => ({ type: GET_USER_IMAGES_FROM_DB });
export const getUserImagesFromDbSucceededAC = (payload: any) => ({ type: GET_USER_IMAGES_FROM_DB_SUCCEEDED, payload});
export const getUserImagesFromDbFailedAC = (payload: any) => ({ type: GET_USER_IMAGES_FROM_DB_FAILED, payload });

export const delClickedAC = (id: number | null) => ({ type: DEL_CLICKED, id});

export const delUserImageFromDbAC = (id: number, userName: string) => ({ type: DEL_USER_IMAGE_FROM_DB, id, userName });
export const delUserImageFromDbSucceededAC = () => ({ type: DEL_USER_IMAGE_FROM_DB_SUCCEEDED });
export const delUserImageFromDbFailedAC = (payload: any) => ({ type: DEL_USER_IMAGE_FROM_DB_FAILED, payload });
