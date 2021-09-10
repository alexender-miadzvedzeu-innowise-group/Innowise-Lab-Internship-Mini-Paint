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
export const getUserImagesFromDbAC = (userID: string, userName: string) => ({ type: GET_USER_IMAGES_FROM_DB, userID, userName });
export const getUserImagesFromDbSucceededAC = (payload: [object] | unknown) => ({ type: GET_USER_IMAGES_FROM_DB_SUCCEEDED, payload});
export const getUserImagesFromDbFailedAC = (payload: {code:string, message: string} | unknown) => ({ type: GET_USER_IMAGES_FROM_DB_FAILED, payload });

export const delClickedAC = (id: string | null, imgUrl: string | null) => ({ type: DEL_CLICKED, id, imgUrl});

export const delUserImageFromDbAC = (id: number | null, userID: string, imgUrl: string | null, userName: string) => ({ type: DEL_USER_IMAGE_FROM_DB, id, userID, imgUrl, userName });
export const delUserImageFromDbSucceededAC = () => ({ type: DEL_USER_IMAGE_FROM_DB_SUCCEEDED });
export const delUserImageFromDbFailedAC = (payload: {code:string, message: string} | unknown) => ({ type: DEL_USER_IMAGE_FROM_DB_FAILED, payload });
