import { combineReducers } from "redux";
import tracks from "./tracks";
import albums from "./albums";
import login from "./login";
import playlists from "./playlists";
import tags from "./tags";
import errors from "./errors";

export default combineReducers({
  login,
  tracks,
  albums,
  playlists,
  errors,
  tags
});