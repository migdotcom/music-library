import axios from "axios";

import { GET_SEARCH } from "./types";

//GETS SEARCH
export const getSearches = () => dispatch => {
  axios
    .get("/api/search/", {
        params: {
            //id: 2,
            //Name: "Vietnam Champion"
        }
    }).then(res => {
      dispatch({
        type: GET_SEARCH,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

