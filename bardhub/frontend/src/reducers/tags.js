import { GET_TAGS } from "../actions/types.js";

const intialState = {
  tags: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    default:
      return state;
  }
}
