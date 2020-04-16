import axios from "axios";

import { GET_ALBUMS, GET_ALBUMS_PASTMONTH, DELETE_ALBUMS } from "./types";

//make all http requests here, fire off actions here with dispatch
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
var count;
export const getAlbumsFromPastMonth = () => dispatch => {
  axios
    .get("/api/albums-pastmonth")
    .then(res => {
    count = Object.keys(res.data).length;
    console.log("Count of albums past month: ")
    console.log(count);
      dispatch({
        type: GET_ALBUMS_PASTMONTH,
        payload: count
      });
    })
    .catch(err => console.log(err));
};
