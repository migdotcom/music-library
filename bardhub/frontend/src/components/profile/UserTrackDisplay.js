import React, { Component, Fragment } from "react";
import { Link }  from 'react-router-dom';

export function UserTrackDisplay(props){
	let { track } = props;
	return (<div className="card text-center border-dark mb-3 " key={ track.id }>
		    <div style={{ backgroundColor: "black" }}>
		      <div className="card-body text-light">
                <h5>{track.Name}</h5>
                <Link to={"/edittrack/" + track.id}>
                Edit
                </Link>
                <div>
                  <audio src={track.Song} controls />
                </div>
                <p>{track.Licensing_right} {track.Notes} {track.Time_stamp} {track.Artist.username}</p>
                {/* <td>{track.Tag}</td> */}
		      </div>
		    </div>
		  </div>)
}