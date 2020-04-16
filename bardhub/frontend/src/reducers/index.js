import { combineReducers } from "redux";
import tracks from "./tracks";
import albums from "./albums";
import leads from "./leads";

export default combineReducers({
  tracks,
  albums,
  leads,
});
