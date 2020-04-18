import { combineReducers } from "redux";
import tracks from "./tracks";
import albums from "./albums";
import login from "./login";
import playlists from "./playlists";
import tags from "./tags";
import errors from "./errors";
import users from "./users";
import reports from "./reports";

export default combineReducers({
  login,
  tracks,
  albums,
  playlists,
  errors,
  tags,
  users,
  reports
});