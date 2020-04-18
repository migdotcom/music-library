import React, { Component, Fragment } from "react";
import {verify} from "../../verify";
export function TrackDisplay(props){
	let { track } = props;
	return (<div className="card text-center border-dark mb-3 " key={ track.id }>
		    <div style={{ backgroundColor: "black" }}>
		      <div className="card-body text-light">
                <h5>{track.Name}</h5>
                <div>
                  <audio src={track.Song} controls />
                </div>
                <p>{track.Licensing_right} {track.Notes} {track.Time_stamp} {verify(track.Artist)}</p>
                {/* <td>{track.Tag}</td> */}
		      </div>
		    </div>
		  </div>)
}