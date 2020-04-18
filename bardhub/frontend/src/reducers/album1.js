import {
    GET_ALBUMS_NEWEST_ONE,
  } from "../actions/types.js";
  
  const intialState = {
    albums_topCounts: [],
  };
  
  export default function (state = intialState, action) {
    console.log("inside newest_one reducer");
    console.log("inside newest_one reducer", action.payload);
    switch (action.type) {
      case GET_ALBUMS_NEWEST_ONE:
        return {
          ...state,
          albums_topCounts: action.payload,
        };
      default:
        return state;
    }
  }
  