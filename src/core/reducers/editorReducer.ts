import { 
  SET_LINE_WEIGHT, 
  SET_LINE_COLOR, 
  SET_INSTRUMENT, 
  SET_CANVAS_SIZE, 
  SET_MOUSE_DOWN_POSITION,
  SET_MAIN_CTX,
  SET_SUB_CTX 
} from '../actions/editor'

interface Action {
  readonly type: string,
  readonly lineWeight: string
  readonly lineColor: string
  readonly instrumentName: string
  readonly windowsSize: {
    width: number
    height: number
  },
  readonly mouseDownPosition: {
    x: number,
    y: number
  },
  readonly context: object
}

interface State {
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
  mainCtx: object,
  subCtx: object
}

const initialState: State = {
  lineColor: '#000',
  lineWeight: '1',
  instrumentName: '',
  canvasSize: {
    width: 0,
    height: 0
  },
  mouseDownPosition: {},
  mainCtx: {},
  subCtx: {}
}

export const editorReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case SET_LINE_WEIGHT:
      if (action.lineWeight !== null) {
        return {...state, lineWeight: action.lineWeight}
      } else return state;
    case SET_LINE_COLOR:
      return {...state, lineColor: action.lineColor};
    case SET_INSTRUMENT:
      return {...state, instrumentName: action.instrumentName};
    case SET_CANVAS_SIZE:
      return {...state, canvasSize: {
        ...state.canvasSize, width: action.windowsSize.width, height: action.windowsSize.height
      }}
    case SET_MOUSE_DOWN_POSITION:
      return {...state, mouseDownPosition: {
        ...state.mouseDownPosition, x: action.mouseDownPosition.x, y: action.mouseDownPosition.y
      }}
    case SET_MAIN_CTX:
      return {...state, mainCtx: action.context}
    case SET_SUB_CTX:
      return {...state, subCtx: action.context}
    default:
      return state;
  }
}

export const setLineWeightAC = (lineWeight: string) => ({ type: SET_LINE_WEIGHT, lineWeight})
export const setLineColorAC = (lineColor: string) => ({ type: SET_LINE_COLOR, lineColor})
export const setInstrumentAC = (instrumentName: string) => ({ type: SET_INSTRUMENT, instrumentName})

export const setCanvasSizeAC = (windowsSize: object) => ({ type: SET_CANVAS_SIZE, windowsSize})

export const setMouseDownPositionAC = (mouseDownPosition: object) => ({ type: SET_MOUSE_DOWN_POSITION, mouseDownPosition})

export const setMainCtxAC = (context: object) => ({ type: SET_MAIN_CTX, context})
export const setSubCtxAC = (context: object) => ({ type: SET_SUB_CTX, context})

export default editorReducer;