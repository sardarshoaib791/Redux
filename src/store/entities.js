import { combineReducers } from "redux";
import bugsReducer from "./bug";
import projectReducer from "./project";

export default combineReducers({
  bugs: bugsReducer,
  pojects: projectReducer,
});
