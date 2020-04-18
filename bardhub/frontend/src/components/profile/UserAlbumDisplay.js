import { Link }  from 'react-router-dom';
import React, { Component, Fragment } from "react";
export function UserAlbumDisplay(props){
	let { album } = props;
	return (<div className="card text-center border-dark mb-3 " key={album.id}>
                <div style={{ backgroundColor: "black" }}>
                  <div className="card-body text-light">
                    <h5 className="card-title font-weight-bold ">
                      <Link to={"/useralbum/" + album.id}>
		          		{album.Name}
		          	  </Link>
                    </h5>
                    <Link to={"/editalbum/" + album.id} >Edit</Link>
                    <p className="card-text ">{album.Description}</p>
                    <img
                      className="card-img-top"
                      src={album.Cover_image}
                      width="350"
                      height="350"
                      alt="Card image cap"
                    />
                    <p className="card-text">Views: {album.Count}</p>
                    <button onClick={() => this.props.CheatViews(album.id)}>Cheat Viewcount</button>
                    <p className="card-text">{album.Time_stamp}</p>
                  </div>
                </div>
              </div>)
}