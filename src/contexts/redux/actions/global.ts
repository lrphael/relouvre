import { AppTypes, AppActionTypes } from "../actionTypes/app"
import { Dispatch } from "redux";
import { GlobalState } from "../models/globalState";

export const setGlobalState = (obj: GlobalState) => {
  return (dispatch: Dispatch<AppActionTypes>) => {
    dispatch({
      type: AppTypes.GLOBAL,
      payload: obj
    })
  }
}