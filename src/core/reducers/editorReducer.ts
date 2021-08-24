import { SET_LINE_WEIGHT, SET_LINE_COLOR, SET_INSTRUMENT } from '../actions/editor'

interface Action {
  readonly type: string,
  readonly lineWeight: string
  readonly lineColor: string
  readonly instrumentName: string
}

interface State {
  lineColor: string,
  lineWeight: string,
  instrumentName: string
}

const initialState: State = {
  lineColor: '#fff',
  lineWeight: '1',
  instrumentName: ''
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
    default:
      return state;
  }
}

export const setLineWeightAC = (lineWeight: string) => ({ type: SET_LINE_WEIGHT, lineWeight})
export const setLineColorAC = (lineColor: string) => ({ type: SET_LINE_COLOR, lineColor})
export const setInstrumentAC = (instrumentName: string) => ({ type: SET_INSTRUMENT, instrumentName})


export default editorReducer;