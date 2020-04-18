import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getTracks } from "../../actions/tracks";
import { AlbumDisplay } from "./AlbumDisplay";
import { TrackDisplay } from "./TrackDisplay";

export class AlbumPage extends Component {
    
  static propTypes = {
    album: propTypes.object.isRequired,
    tracks: propTypes.array,
    getTracks: propTypes.func.isRequired,
  };

  componentDidMount() {
     this.setState({tracks: []});
	   this.props.getTracks(this.props.album.id);
  }

  render() {
    return (
      <Fragment>
        <AlbumDisplay album={this.props.album} />
        <h4>Tracks</h4>
        {this.props.tracks.map((track) => (TrackDisplay({ track })))}
      </Fragment>
    )
  }
}



function mapStateToProps (state, ownprops){
  let id = ownprops.match.params.id;
  id = parseInt(id);
  let album = state.albums.albums.filter((album) => album.id == id)[0];
  return {tracks: state.tracks.tracks, album}
};

export default connect(mapStateToProps, { getTracks })(AlbumPage);
