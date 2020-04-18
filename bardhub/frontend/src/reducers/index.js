import { combineReducers } from "redux";
import tracks from "./tracks";
import albums from "./albums";
import albums_topCounts from "./album1";
import login from "./login";
import playlists from "./playlists";
import tags from "./tags";
import errors from "./errors";
import users from "./users";
import events from "./events";
import reports from "./reports";

export default combineReducers({
  login,
  tracks,
  albums,
  albums_topCounts,
  playlists,
  errors,
  tags,
  users,
  events,
  reports
});