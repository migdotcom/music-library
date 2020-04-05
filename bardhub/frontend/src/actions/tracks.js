import axios from "axios";

import { GET_TRACKS, DELETE_TRACK } from "./types";

//GETS TRACKS

export const getTracks = () => dispatch => {
	//var result;
	axios.get("/api/users/", {
		params: {
			Display_name: "apogii",
			// test user
	}})
	.then(res => {
		console.log(res.data);
		return 
			axios.get("/api/albums/", {
				params: {
					id: res.data.id}})
	})
			.then(res2 => {
				console.log(res2);
				dispatch({
					type: GET_TRACKS,
					payload: res2.data
			  });
			})
    .catch(err => console.log(err));
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
