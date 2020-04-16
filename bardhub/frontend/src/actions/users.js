import axios from "axios";

import { GET_USER } from "./types";

//GET USER, currently only one implemented for ArtistPage
export const getUser = username => dispatch => {
    axios
    .get("/api/users/", username)
	.then(res => {
        dispatch({
            type: GET_USER
            payload: res2.data
        });
                }
    )
    .catch(err => console.log(err));
};
/* 
export const getUserTotalPlaycount = userid => dispatch => {
    axios
    .get("/api/users/${userid}")
	.catch(
    err => console.log("Error getting user from query "+ userid)
    )
    .then(res => {
        //console.log(res.data);
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
}; */