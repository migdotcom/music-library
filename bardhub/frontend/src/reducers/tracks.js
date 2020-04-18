import {
  GET_TRACKS,
  DELETE_TRACK,
  ADD_TRACK,
  GET_ALBUMS_USER,
  GET_TRACKS_ALBUM,
  UPDATE_TRACK
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
        tracks: state.tracks.filter(
          (tracks) => tracks.Track_id !== action.payload
        ),
      };
    case ADD_TRACK:
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
      };
    case UPDATE_TRACK:
      return {
        ...state,
        tracks: state.tracks.map((track) => {
          if(action.payload.id == track.id){
            return Object.assign(track, action.payload.track);
          }
          return track;
        })
      };
    case GET_TRACKS_ALBUM:
      return {
        ...state,
        tracks: action.payload,
      };
    default:
      return state;
  }
}
