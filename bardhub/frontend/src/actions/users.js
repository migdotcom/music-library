import axios from "axios";

import { GET_USER } from "./types";

//GET USER, currently only one implemented for ArtistPage
export const getUser = Display_name => dispatch => {
    axios
    .get("/api/users/", Display_name)
	.then(res => {
        console.log(res.data);
        }
    )
    .catch(err => console.log(err));
};