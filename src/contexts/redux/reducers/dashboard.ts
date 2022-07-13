import { AppActionTypes, AppTypes } from "../actionTypes/app";

import { DashboardState } from "../models/dashboardState";


const initialStateHere: DashboardState = {
  leftMenuOpen: false,
  leftMenuCompress: false
};

const reducer = (state: DashboardState = initialStateHere, action: AppActionTypes) => {
  switch (action.type) {
    case AppTypes.DASHBOARD:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}

export default reducer