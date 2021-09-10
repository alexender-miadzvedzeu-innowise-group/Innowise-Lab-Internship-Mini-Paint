import { 
  SET_LINE_WEIGHT, 
  SET_LINE_COLOR, 
  SET_INSTRUMENT, 
  SET_CANVAS_SIZE, 
  SET_MOUSE_DOWN_POSITION,
  SET_MAIN_CTX,
  SET_SUB_CTX,
  SET_DATA_URL,
  UPLOAD_IMAGE_SUCCEEDED,
  UPLOAD_IMAGE_FAILED,
  OPEN_UPLOAD_WINDOW
} from './actions.types';
import { Context } from '../types/canvas.types';

export const setLineWeightAC = (lineWeight: string | null) => ({ type: SET_LINE_WEIGHT, lineWeight});
export const setLineColorAC = (lineColor: string) => ({ type: SET_LINE_COLOR, lineColor});
export const setInstrumentAC = (instrumentName: string) => ({ type: SET_INSTRUMENT, instrumentName});

export const setCanvasSizeAC = (windowsSize: {width: number, height: number}) => ({ type: SET_CANVAS_SIZE, windowsSize});

export const setMouseDownPositionAC = (mouseDownPosition: {x?: number, y?: number}) => ({ type: SET_MOUSE_DOWN_POSITION, mouseDownPosition});

export const openUploadWindowsAC = () => ({ type: OPEN_UPLOAD_WINDOW });

export const setMainCtxAC = (context: Context | CanvasRenderingContext2D | null) => ({ type: SET_MAIN_CTX, context});
export const setSubCtxAC = (context: Context | CanvasRenderingContext2D | null) => ({ type: SET_SUB_CTX, context});

export const setDataUrlAC = (dataUrl: string, userID: string, userName: string) => ({type: SET_DATA_URL, dataUrl, userID, userName});
export const uploadImageSuccessedAC = () => ({type: UPLOAD_IMAGE_SUCCEEDED});
export const uploadImageFailedAC = (payload: {code:string, message: string} | unknown) => ({type: UPLOAD_IMAGE_FAILED, payload});