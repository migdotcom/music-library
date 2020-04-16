import { GET_ALBUMS, GET_ALBUMS_PASTMONTH, DELETE_ALBUMS, ADD_ALBUMS } from "../actions/types.js";

const initialState = {
  albums: [] , 
  album_pastmonth_count: null
};

//... includes all in state
// dispatch action to this reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload
      };
    case DELETE_ALBUMS:
      return {
        ...state,
        albums: state.albums.filter(albums => albums.Album_id !== action.payload)
      };
    case ADD_ALBUMS:
      return {
        ...state,
        albums: [...state.albums, action.payload]
      };
    case GET_ALBUMS_PASTMONTH:
        return {
        ...state,
        album_pastmonth_count: action.payload
        };
    default:
      return state;
  }
}
