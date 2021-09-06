import { IauthState } from "../reducers/authReducer";
import { IeditorState } from "../reducers/editorReducer";
import { IhomeState } from "../reducers/homeReducer";
import { IprofileState } from "../reducers/profileReducer";

export interface IState {
  authReducer: IauthState,
  editorReducer: IeditorState,
  homeReducer: IhomeState,
  profileReducer: IprofileState
}