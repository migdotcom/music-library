import {
  GET_tracksOfGenre,
} from "../actions/types.js";

const intialState = {
  tracksOfGenre: []
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_tracksOfGenre:
      return {
        ...state,
        tracksOfGenre: action.payload,
      };
    default:
      return state;
  }
}
