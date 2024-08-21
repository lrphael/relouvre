import { DashboardState } from "../models/dashboardState";
import { GlobalState } from "../models/globalState";

export enum AppTypes {
  GLOBAL = "global",
  DASHBOARD = "dashboard"
}

interface GlobalInterface {
  type: AppTypes.GLOBAL,
  payload: GlobalState
} 

interface DashboardInterface {
  type: AppTypes.DASHBOARD,
  payload: DashboardState
} 

export type AppActionTypes = GlobalInterface | DashboardInterface