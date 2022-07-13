import { AppTypes, AppActionTypes } from "../actionTypes/app"
import { Dispatch } from "redux";
import { DashboardState } from "../models/dashboardState";


export const setLeftMenuState = (obj: DashboardState) => {
  return (dispatch: Dispatch<AppActionTypes>) => {
    dispatch({
      type: AppTypes.DASHBOARD,
      payload: obj
    })
  }
}