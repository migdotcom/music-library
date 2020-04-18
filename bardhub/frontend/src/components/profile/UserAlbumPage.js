import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link }  from 'react-router-dom';

import propTypes from "prop-types";
import { getTracks } from "../../actions/tracks";
import { getAlbumID } from "../../actions/albums";
import { UserAlbumDisplay } from "./UserAlbumDisplay";
import { UserTrackDisplay } from "./UserTrackDisplay";

export class UserAlbumPage extends Component {
    
  static propTypes = {
    album: propTypes.object.isRequired,
    tracks: propTypes.array,
    getTracks: propTypes.func.isRequired,
    getAlbumID: propTypes.func.isRequired,
  };

  componentDidMount() {
     this.setState({tracks: []});
     this.props.getAlbumID(this.props.album.id);
	   this.props.getTracks(this.props.album.id);
  }

  render() {
    return (
      <Fragment>
        <UserAlbumDisplay album={this.props.album} />
        <h4>Tracks</h4>
        {this.props.tracks.map((track) => (UserTrackDisplay({ track })))}
        <Link to={"/addtrack/" + this.props.album.id}>
          Create New Track
        </Link>
      </Fragment>
    )
  }
}



function mapStateToProps (state, ownprops){
  let id = ownprops.match.params.id;
  id = parseInt(id);
  let album = state.albums.albums.filter((album) => album.id == id)[0];
  if(album == null){
    album = { id }
  }
  return {tracks: state.tracks.tracks, album}
};

export default connect(mapStateToProps, { getTracks, getAlbumID })(UserAlbumPage);
