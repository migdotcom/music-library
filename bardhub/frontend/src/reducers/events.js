import { GET_EVENTS } from "../actions/types.js";

const intialState = {
  events: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
}
