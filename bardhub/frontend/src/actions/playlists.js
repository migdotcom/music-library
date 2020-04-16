import axios from "axios";

import { GET_PLAYLIST } from "./types";

//GETS PLAYLIST
export const getPlaylist = () => dispatch => {
  axios
    .get("/api/playlists", {
        params: {
        }
    }).then(res => {
      dispatch({
        type: GET_PLAYLIST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

/*
//DELETE PLAYLIST
export const deletePlaylist = id => dispatch => {
  axios
    .delete(`/api/playlists/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_PLAYLIST,
        payload: id
      });
    })
    .catch(err => console.log(err));
};


//ADD PLAYLIST
export const addPlaylist = Playlist => dispatch => {
  axios
    .post("/api/playlists/", Playlist)
    .then(res => {
      dispatch({
        type: ADD_PLAYLIST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

*/