import axios from "axios";

import { GET_USER , GET_USERTOTALPLAYCOUNT } from "./types";

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().login.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};

//GET USER, currently only one implemented for ArtistPage
export const getUser = username => dispatch => {
    axios
    .get("/api/users/", username)
	.then(res => {
        console.log(res.data);
        }
    )
    .catch(err => console.log(err));
};

//getUser functionality plus more
export const getUserTotalPlaycount = () => (dispatch, getState) => {
    axios
    .get("/api/userTotalPlaycount", tokenConfig(getState))
    .then(res => {
        console.log(res.data);
        dispatch({
                type: GET_USERTOTALPLAYCOUNT,
                payload: res.data
            });
    })
    .catch(err => console.log(err));   
 };   