import axios from "axios";

import { GET_USER , GET_USERTOTALPLAYCOUNT} from "./types";

//GET USER, currently only one implemented for ArtistPage
export const getUser = username => dispatch => {
    axios
    .get("/api/users/", username)
	.then(res => {
        dispatch({
            type: GET_USER,
            payload: res2.data
        });
                }
    )
    .catch(err => console.log(err));
};

//getUser functionality plus more
export const getUserTotalPlaycount = username => dispatch => {
    axios
    .get("/api/users/", 
    {
        params: 
        {
            username: username
        }
    }
    )
	.then(res => {
        console.log(res.data);
        var user_id = res.data.id;
        axios
        .get("/api/userTotalPlaycount/", {
            params: {
                user_id: user_id
        } 
        } )
        .then(res2 => {
            console.log(res2.data);
            dispatch({
                type: GET_USERTOTALPLAYCOUNT,
                payload: res2.data
            });
        })
        .catch(err => console.log(err));    
        })
        //outer 
        .catch(err => console.log(err));  
};