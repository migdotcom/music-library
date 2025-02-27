import { GET_USER, ADD_USER, GET_USERTOTALPLAYCOUNT } from "../actions/types.js";

const initialState = {
  users: [], 
  userTotalPlaycount: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case GET_USERTOTALPLAYCOUNT:
    console.log(state.userTotalPlaycount);
  return  {
      ...state,
      userTotalPlaycount: action.payload
  };
    default:
      return state;
  }
}
