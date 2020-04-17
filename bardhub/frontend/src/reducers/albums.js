import {
  GET_ALBUMS,
  DELETE_ALBUMS,
  ADD_ALBUMS,
  GET_ALBUMS_NEWEST,
  GET_ALBUMS_USER,
  GET_ALBUMS_PASTMONTH,
  UPDATE_ALBUM
} from "../actions/types.js";

const intialState = {
  albums: [],
  album_pastmonth_count: null
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case DELETE_ALBUMS:
      return {
        ...state,
        albums: state.albums.filter(
          (albums) => albums.Album_id !== action.payload
        ),
      };
    case ADD_ALBUMS:
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };
    case GET_ALBUMS_NEWEST:
      return {
        ...state,
        albums: action.payload,
      };

    case GET_ALBUMS_USER:
      return {
        ...state,
        albums: action.payload,
      };
    case UPDATE_ALBUM:
      return {
        ...state,
        albums: state.albums.map((album) => {
          if(action.payload.album.id == album.id){
            return Object.assign(album, action.payload.album);
          }
          return album;
        })
      };
    default:
      return state;
  }
}
