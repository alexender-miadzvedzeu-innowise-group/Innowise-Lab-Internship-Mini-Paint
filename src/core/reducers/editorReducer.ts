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
} from '../actions/actions.types';

interface Action {
  type: string,
  lineWeight: string,
  lineColor: string,
  instrumentName: string,
  windowsSize: {
    width: number,
    height: number
  },
  mouseDownPosition: {
    x: number,
    y: number
  },
  context: object,
  dataUrl: string,
  imgName: number,
}

export interface IContext {
  strokeStyle: string,
  lineWidth: string,
  canvas: HTMLCanvasElement,
  clearRect: (x: number, y:number, toX: number, toY: number) => void,
  strokeRect: (x: number, y:number, toX: number, toY: number) => void,
  stroke: () => void,
  beginPath: () => void,
  arc: (x: number, y: number, radius: number, arcStart: number, arcEnd: number, right: boolean) => void,
  moveTo: (x: number, y: number) => void,
  lineTo: (x: number, y: number) => void,
  drawImage: (ref: HTMLCanvasElement | null, x: number, y: number) => void
}

export interface IeditorState {
  lineColor: string,
  lineWeight: string,
  instrumentName: string,
  canvasSize: {
    width: number,
    height: number
  },
  mouseDownPosition: {
    x?: number,
    y?: number
  },
  mainCtx?: IContext,
  subCtx?: IContext,
  subCtxDataUrl: string,
  imgName: string,
  loading: boolean,
  error: boolean,
  successed: boolean,
  uploadWindowsOpened: boolean
}

const initialState: IeditorState = {
  lineColor: '#000',
  lineWeight: '1',
  instrumentName: '',
  canvasSize: {
    width: 0,
    height: 0
  },
  mouseDownPosition: {},
  subCtxDataUrl: '',
  imgName: '',
  loading: false,
  error: false,
  successed: false,
  uploadWindowsOpened: false
};

export const editorReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case SET_LINE_WEIGHT:
      if (action.lineWeight !== null) {
        return {...state, lineWeight: action.lineWeight};
      } else return state;
    case SET_LINE_COLOR:
      return {...state, lineColor: action.lineColor};
    case SET_INSTRUMENT:
      return {...state, instrumentName: action.instrumentName};
    case SET_CANVAS_SIZE:
      return {...state, canvasSize: {
        ...state.canvasSize, width: action.windowsSize.width, height: action.windowsSize.height
      }};
    case SET_MOUSE_DOWN_POSITION:
      return {...state, mouseDownPosition: {
        ...state.mouseDownPosition, x: action.mouseDownPosition.x, y: action.mouseDownPosition.y
      }};
    case SET_MAIN_CTX:
      return {...state, mainCtx: action.context};
    case SET_SUB_CTX:
      return {...state, subCtx: action.context};
    case SET_DATA_URL:
       return {...state, 
        subCtxDataUrl: action.dataUrl, 
        loading: true, 
        error: false, 
        successed: false
      };
    case OPEN_UPLOAD_WINDOW:
      return {...state, uploadWindowsOpened: !state.uploadWindowsOpened};
    case UPLOAD_IMAGE_SUCCEEDED:
      return {...state, loading: false, error: false, successed: true, lineColor: '#000', lineWeight: '1', instrumentName: ''};
    case UPLOAD_IMAGE_FAILED:
      return {...state, loading: false, error: true, successed: false};
    default:
      return state;
  }
};

export default editorReducer;