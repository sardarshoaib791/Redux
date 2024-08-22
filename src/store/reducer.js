import { combineReducers } from "redux";
import entitiesReducer from "./entities";

let lastId = 0;
export default combineReducers({
  entities: entitiesReducer,
});
