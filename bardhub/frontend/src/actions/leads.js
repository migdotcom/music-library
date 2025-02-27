import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

//GETS LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//DELETE LEADS
export const deleteLeads = id => dispatch => {
  axios
    .delete("/api/leads/${id}/")
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD LEADS
export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(res => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
