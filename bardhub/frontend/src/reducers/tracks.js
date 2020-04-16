import {
  GET_TRACKS,
  DELETE_TRACK,
  ADD_TRACK,
  CLEAR_TRACKS,
} from "../actions/types.js";

const intialState = {
  tracks: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    case DELETE_TRACK:
      return {
        ...state,
        tracks: state.tracks.filter((track) => track.id !== action.payload),
      };
    case ADD_TRACK:
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
      };
    case CLEAR_TRACKS:
      return {
        ...state,
        tracks: [],
      };
    default:
      return state;
  }
}
