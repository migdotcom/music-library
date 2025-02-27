import axios from "axios";

import {
  GET_TRACKS,
  GET_TRACKS_NEWEST,
  DELETE_TRACK,
  ADD_TRACK,
  GET_TRACKS_USER,
  GET_TRACKS_ALBUM,
  UPDATE_TRACK
} from "./types";

//GETS TRACKS OF AN ALBUM
export const getTracksAlbum = (albumName) => (dispatch) => {
  axios
    .get("/api/albums-name/", {
      params: {
        Name: albumName,
      },
    })
    .then((res) => {
      console.log(res.data);
      console.log("start res hehehe ==============");
      console.log("res.data.id = ", res.data[0].id);
      var id_params = res.data[0].id;
      if (typeof id_params == "number") {
        axios
          .get("/api/tracks-album/", {
            params: {
              id: id_params,
            },
          })
          .then((res2) => {
            console.log("in res2 ===============    ");
            console.log(res2);
            dispatch({
              type: GET_TRACKS_ALBUM,
              payload: res2.data,
            });
          })
          .catch((err) => console.log(err));
        console.log("end res");
      }
    })
    .catch((err) => console.log(err));
};

//GETS ALL TRACKS
export const getTracks = id => (dispatch) => {
  axios
    .get("/api/tracks-album/", {
      params: { id },
    })
    .then((res) => {
      console.log(res.data, id)
      dispatch({
        type: GET_TRACKS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getTrackID = id => (dispatch) => {
  axios
    .get("/api/tracks-byid/", {
      params: { id },
    })
    .then((res) => {
      console.log(res.data, id)
    } )
    
}
//GETS ALL TRACKS
export const getTracksNewest = () => (dispatch) => {
  axios
    .get("/api/tracks-newest/", {
    })
    .then((res) => {
      console.log("======== inside track newest", res.data)

      dispatch({
        type: GET_TRACKS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//DELETE TRACKS
export const deleteTracks = (id) => (dispatch) => {
  axios
    .delete(`/api/tracks/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_TRACK,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD TRACKS
export const addTrack = (Track) => (dispatch, getState) => {
  axios
    .post("/api/maketrack", Track, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_TRACK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const editTrack = (Track) => (dispatch, getState) => {
  axios
    .post("/api/edittrack", Track, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_TRACK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().login.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};