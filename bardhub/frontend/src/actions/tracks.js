import axios from "axios";

import { GET_TRACKS, DELETE_TRACK } from "./types";

var noResults = {id: 1, Description: "Sorry, no results", Name: "No Results Found", Cover_image: null, Count: 666, User: 0} 
//GETS TRACKS
export const getTracks = userName => dispatch => {
    axios
    .get("/api/users/", {params: {Display_name: userName} })
	.catch(
    err => console.log("ERROR FOOL"),
    dispatch({
        type: "error",
        payload: null
    })
    )
    .then(res => {
		    console.log(res.data);
       	    console.log("start res");
       	    console.log("res.data.id = ", typeof(res.data[0].id))
       	    var id_params = res.data[0].id;
            console.log(id_params);
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
                    console.log("id inside then" + res2.data[0].Name);

                })
                .catch(err => console.log(err));
                console.log("res2 data" + res2.data);
            }
    })
    .catch(
    err => console.log("ERROR FOOL2"),
    
    dispatch({
        type: "error",
        payload: noResults
    })
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
