import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getAlbumsNewestOne, getAlbumsNewest } from "../../actions/albums";
import { getTracksNewest } from "../../actions/tracks";
import { getEvents } from "../../actions/events";
import { getPlaylist } from "../../actions/playlists";
import NewAlbum_Dashboard from "../newAlbum/NewAlbum_Dashboard";
import NewTrack from "../NewTrack/NewTrack"; 
import NewEvent from "../NewEvent/NewEvent";


export class NewsFeed extends Component {
  static propTypes = {
    albums: propTypes.array,
    albums_topCounts: propTypes.array,
    getAlbumsNewestOne: propTypes.func.isRequired,
    getAlbumsNewest: propTypes.func.isRequired,
    tracks: propTypes.array,
    getTracksNewest: propTypes.func.isRequired,
    events: propTypes.array,
    getEvents: propTypes.func.isRequired,
    playlists: propTypes.array,
    getPlaylist: propTypes.func.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      albums: ["blank"],
      albums_topCounts: ["blank"],
      tracks: ["blank"],
      playlists: ["blank"]
    }
  }

  componentDidMount() {
    this.props.getAlbumsNewest();
    this.props.getAlbumsNewestOne();
    console.log("this album top count",this.props.albums_topCounts )
    this.props.getTracksNewest();
    this.props.getPlaylist();
  }

  imageAlbumOfTheDay() {
    const albumImages = this.props.albums.map(image => (image.Cover_image));
    if (albumImages.length > 0) {
      return albumImages[0]
    }
  }

  imageTrackOfTheDay() {
    const trackImages = this.props.tracks.map(image => (image.URL));
    if (trackImages.length > 0) {
      return trackImages[trackImages.length - 1]
    }
  }


  imagePlaylistOfTheDay() {
    const playlistImages = this.props.playlists.map(image => (image.Playlist_image));
    if (playlistImages.length > 0) {
      return playlistImages[playlistImages.length - 1]
    }
  }


  sayAlbumOfTheDay() {
    console.log("wegwegweeeeeeeeeeeeeeeeee",this.props.albums_topCounts );
    
    const albumNames = this.props.albums_topCounts.map(albumName => (albumName.Name));
    const albumDescriptions = this.props.albums_topCounts.map(albumDescription => (albumDescription.Description));
    const albumTime_stamps = this.props.albums_topCounts.map(albumTime_stamp => (albumTime_stamp.Time_stamp));
    const albumCounts = this.props.albums_topCounts.map(albumCount => (albumCount.Count));

    console.log(albumNames, " my 2 hours");
    if (albumNames.length > 0) {
      return (
        <div className="card text-center">
          <div className="card-header">
            Most viewed album
              </div>
          <div className="card-body bg-dark">
            <h5 className="card-title text-white">
              {albumNames[albumNames.length - 1]}
            </h5>
            <p className="card-text text-white">Description: {albumDescriptions[albumDescriptions.length - 1] != null ? albumDescriptions[albumDescriptions.length - 1] : "not yet"}
            </p>
          </div>
          <div className="card-footer text-muted">
            Created {albumTime_stamps[albumTime_stamps.length - 1].toString().substring(0, 10)} || Totalviews: {albumCounts[albumCounts.length - 1].toString()}
          </div>
        </div>
      )
    }
  }

  sayTrackOfTheDay() {
    const trackNames = this.props.tracks.map(track => (track.Name));
    const trackLicensing_rights = this.props.tracks.map(track => (track.Licensing_rights));
    const trackTime_stamp = this.props.tracks.map(track => (track.Time_stamp));
    if (trackNames.length > 0) {
      return (
        <div className="card text-center">
          <div className="card-header">
            Newest Track
        </div>
          <div className="card-body bg-dark">
            <h5 className="card-title text-white">{trackNames[trackNames.length - 1]}</h5>
            <p className="card-text text-white">Licensing_rights: {trackLicensing_rights[trackLicensing_rights.length - 1] != null ? trackLicensing_rights[trackLicensing_rights.length - 1] : "not yet"}</p>
          </div>
          <div className="card-footer text-muted">
            Created {trackTime_stamp[trackTime_stamp.length - 1].toString().substring(0, 10)}
          </div>
        </div>
      )
    }
  }

  sayEventOfTheDay() {
    const eventLocations = this.props.events.map(event => (event.Location));
    const eventTime_happenings = this.props.events.map(event => (event.Time_happening));
    const eventTime_stamp = this.props.events.map(event => (event.Time_stamp));
    if (eventLocations.length > 0) {
      return (
        <div className="card text-center">
          <div className="card-header">
            Coming-up Event
        </div>
          <div className="card-body bg-dark">
            <h5 className="card-title text-white">{eventLocations[eventLocations.length - 1]}</h5>
            <p className="card-text text-white">Time_happenings: {eventTime_happenings[eventTime_happenings.length - 1] != null ? eventTime_happenings[eventTime_happenings.length - 1] : "not yet"}</p>
          </div>
          <div className="card-footer text-muted">
            Created {eventTime_stamp[eventTime_stamp.length - 1].toString().substring(0, 10)}
          </div>
        </div>
      )
    }
  }


  render() {
    return (
      <Fragment>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {this.sayAlbumOfTheDay()}
            </div>
            <div className="carousel-item">
              {this.sayTrackOfTheDay()}
            </div>
            <div className="carousel-item">
              {this.sayEventOfTheDay()}
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <NewAlbum_Dashboard />
        <NewTrack />
        <NewEvent />
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  albums: state.albums.albums,
  albums_topCounts: state.albums_topCounts.albums_topCounts,
  tracks: state.tracks.tracks,
  playlists: state.playlists.playlists,
  events: state.events.events,

});

export default connect(mapStateToProps, { getAlbumsNewestOne, getTracksNewest, getPlaylist, getAlbumsNewest, getEvents })(NewsFeed);
