import { combineReducers } from "redux";
import bugsReducer from "./bug";
import projectReducer from "./project";
import userReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  pojects: projectReducer,
  users: userReducer,
});
