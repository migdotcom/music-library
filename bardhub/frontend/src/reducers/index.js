import { combineReducers } from "redux";
import tracks from "./tracks";
import albums from "./albums";
import login from "./login";

export default combineReducers({
  login,
  tracks,
  albums
});