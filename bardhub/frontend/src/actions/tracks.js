import axios from "axios";

import { GET_TRACKS, DELETE_TRACK, ADD_TRACK } from "./types";

//GETS TRACKS
export const getTracks = () => (dispatch) => {
  axios
    .get("/api/users/")
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
              type: GET_TRACKS,
              payload: res2.data,
            });
          })
          .catch((err) => console.log(err));
        console.log("end res");
      }
    })
    .catch((err) => console.log(err));
};
//DELETE TRACKS
export const deleteTrack = (id) => (dispatch) => {
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
export const addTrack = (Track) => (dispatch) => {
  console.log(Track, "helo");
  axios
    .post("/api/tracks/", Track)
    .then((res) => {
      console.log(Track, "helo");
      dispatch({
        headers: {
          "Content-Type": "application/json",
        },
        type: ADD_TRACK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
