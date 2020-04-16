import { GET_PLAYLIST, DELETE_PLAYLIST, ADD_PLAYLIST } from "../actions/types.js";

const intialState = {
  playlists: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_PLAYLIST:
      return {
        ...state,
        playlists: action.payload
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(playlists => playlists.id !== action.payload)
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists, action.payload]
      };
    default:
      return state;
  }
}
