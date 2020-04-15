import axios from "axios";

import { GET_ALBUMS, DELETE_ALBUMS } from "./types";

//GETS TRACKS
export const getAlbums = () => dispatch => {
  axios
    .get("/api/albums-newest", {
        params: {
            id: 2,
            //Name: "Vietnam Champion"
        }
    }).then(res => {
      dispatch({
        type: GET_ALBUMS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//DELETE TRACKS
export const deleteAlbums = id => dispatch => {
  axios
    .delete(`/api/albums/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_ALBUMS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};


//ADD TRACKS
export const addAlbums = Album => dispatch => {
  axios
    .post("/api/albums/", Album)
    .then(res => {
      dispatch({
        type: ADD_ALBUMS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getAlbumsFromPastMonth = () => dispatch => {
  axios
    .get("/api/albums-pastmonth")
    .then(res => {
    console.log("Albums from past month: " + res.data);
      dispatch({
        type: GET_ALBUMS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
