import axios from "axios";

import { GET_tracksOfGenre } from "./types";

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
export const gettracksOfGenre = genre => dispatch => {
    axios
    .post("/api/gettracksOfGenre", genre
      )
	.then(res => {
        console.log(res.data);
        dispatch({
                type: GET_tracksOfGenre,
                payload: res.data
            });
    })
    .catch(err => console.log(err));
};