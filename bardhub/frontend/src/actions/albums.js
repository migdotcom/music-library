import axios from "axios";

import {
  GET_ALBUMS,
  DELETE_ALBUMS,
  GET_ALBUMS_NEWEST,
  GET_ALBUMS_USER,
  GET_ALBUMS_PASTMONTH, UPDATE_VIEWS
} from "./types";

//GETS ALBUMS
export const getAlbums = () => (dispatch) => {
  axios
    .get("/api/albums-newest", {
      params: {},
    })
    .then((res) => {
      dispatch({
        type: GET_ALBUMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//GET ALL ALBUMS OF AN USER
export const getAlbumsUser = (userName) => (dispatch) => {
  axios
    .get("/api/users/", {
      params: {
        username: userName,
      },
    })
    //{headers: {'Content-Type': 'application/json'}, params: {username: userName} })
    .then((res) => {
      console.log(res.data);
      console.log("start res");
      console.log("res.data.id = ", typeof res.data[0].id);
      var id_params = res.data[0].id;
      if (typeof id_params == "number") {
        axios
          .get("/api/albums/", {
            params: {
              id: id_params,
            },
          })
          .then((res2) => {
            console.log("in res2");
            console.log(res2);
            dispatch({
              type: GET_ALBUMS_USER,
              payload: res2.data,
            });
          })
          .catch((err) => console.log(err));
        console.log("end res");
      }
    })
    .catch((err) => console.log(err));
};

//DELETE ALBUMS
export const deleteAlbums = (id) => (dispatch) => {
  axios
    .delete(`/api/albums/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_ALBUMS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD ALBUMS
export const addAlbums = (Album) => (dispatch) => {
  axios
    .post("/api/albums/", Album)
    .then((res) => {
      dispatch({
        type: ADD_ALBUMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// GET NEWEST ALBUMS: TOP 1
export const getAlbumsNewestOne = () => (dispatch) => {
  axios
    .get("/api/albums-newest-one", {
      params: {},
    })
    .then((res) => {
      dispatch({
        type: GET_ALBUMS_NEWEST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

var count;
export const getAlbumsFromPastMonth = () => dispatch => {
  axios
    .get("/api/albums-pastmonth")
    .then(res => {
    count = Object.keys(res.data).length;
    console.log("Count of albums past month: ");
    console.log(count);
    dispatch({
        type: GET_ALBUMS_PASTMONTH,
    payload: count });
})
};

export const IncView = album_id => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    axios
    .post("/api/albums/inc-views", {id: album_id}, config)
    .then(res => {
      dispatch({
        type: UPDATE_VIEWS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const CheatViews = album_id => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    axios
    .post("/api/albums/inc-views/cheat", {id: album_id}, config)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
};