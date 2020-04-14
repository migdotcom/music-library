import axios from "axios";

import { GET_TRACKS, DELETE_TRACK } from "./types";

var noResults = {id: 1, Description: "Sorry, no results", Name: "No Results Found", Cover_image: null, Count: 666, User: 0} 
//GETS TRACKS
export const getTracks = userName => dispatch => {
    axios
    .get("/api/users/", {params: {username: userName} })
	.catch(
    err => console.log("Error getting user from query "+ userName),
    dispatch({
        type: "error",
        payload: null
    })
    )
    .then(res => {
		    console.log(res.data);
       	    var id_params = res.data[0].id;
            if (typeof(id_params) == "number"){
                axios
                .get("/api/albums/", {
                    params: {
                        id: id_params
                    }
                })
                .then(res2 => {
                    dispatch({
                        type: GET_TRACKS,
                        payload: res2.data
                    });
                })
                .catch(err => console.log(err));
            }
    })
    .catch(
    err => console.log("Error getting albums from user id ")
/*    , dispatch({
        type: "error",
        payload: noResults
    }) */
    // todo: create noResults object in our code (or maybe in the database under a specific user) that will show upon No Results preventing bugs that we have
    );
};
//DELETE TRACKS
export const deleteTracks = id => dispatch => {
  axios
    .delete(`/api/tracks/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_TRACK,
        payload: id
      });
    })
    .catch(err => console.log(err));
};


//ADD TRACKS
export const addTrack = Track => dispatch => {
  axios
    .post("/api/tracks/", Track)
    .then(res => {
      dispatch({
        type: ADD_TRACK,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
