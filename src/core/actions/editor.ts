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


export const setLineWeightAC = (lineWeight: string) => ({ type: SET_LINE_WEIGHT, lineWeight})
export const setLineColorAC = (lineColor: string) => ({ type: SET_LINE_COLOR, lineColor})
export const setInstrumentAC = (instrumentName: string) => ({ type: SET_INSTRUMENT, instrumentName})

export const setCanvasSizeAC = (windowsSize: object) => ({ type: SET_CANVAS_SIZE, windowsSize})

export const setMouseDownPositionAC = (mouseDownPosition: object) => ({ type: SET_MOUSE_DOWN_POSITION, mouseDownPosition})

export const openUploadWindowsAC = () => ({ type: OPEN_UPLOAD_WINDOW })

export const setMainCtxAC = (context: object) => ({ type: SET_MAIN_CTX, context})
export const setSubCtxAC = (context: object) => ({ type: SET_SUB_CTX, context})

export const setDataUrlAC = (dataUrl: string, userName: string) => ({type: SET_DATA_URL, dataUrl, userName})
export const uploadImageSuccessedAC = (payload: any) => ({type: UPLOAD_IMAGE_SUCCEEDED, payload})
export const uploadImageFailedAC = (payload: any) => ({type: UPLOAD_IMAGE_FAILED, payload})