import axios from "axios";

import { GET_USER } from "./types";

//GET USER, currently only one implemented for ArtistPage
export const getUser = username => dispatch => {
    axios
    .get("/api/users/", username)
	.then(res => {
        console.log(res.data);
        }
    )
    .catch(err => console.log(err));
};