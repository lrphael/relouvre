import { combineReducers } from "redux";
import global from "./global";
import dashboard from "./dashboard";

const reducers = combineReducers({
  global: global,
  dashboard: dashboard
});

export default reducers;

export type State = ReturnType<typeof reducers>