import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getAlbumsNewest } from "../../actions/albums";
import { getTracks } from "../../actions/tracks";
import { getPlaylist } from "../../actions/playlists";
import NewAlbum_Dashboard from "../newAlbum/NewAlbum_Dashboard";


export class NewsFeed extends Component {
  static propTypes = {
    albums: propTypes.array,
    getAlbumsNewest: propTypes.func.isRequired,
    // tracks: propTypes.array,
    // getTracks: propTypes.func.isRequired,
    // playlists: propTypes.array,
    // getPlaylist: propTypes.func.isRequired,
  };

    constructor(props) {
        super(props)
        this.state = {
            albums: ["blank"],
            // tracks: ["blank"],
            // playlists: ["blank"]
        }
    }

  componentDidMount() {
	      this.props.getAlbumsNewest();
	      // this.props.getTracks();
	      // this.props.getPlaylist();
  }

  imageAlbumOfTheDay(number) {
     const albumImages = this.props.albums.map(image => (image.Cover_image));
     if (albumImages.length > 0) {
        return albumImages[number]
     }
  }

  // imageTrackOfTheDay() {
  //    const trackImages = this.props.tracks.map(image => (image.URL));
  //    if (trackImages.length > 0) {
  //       return trackImages[trackImages.length-1]
  //    }
  // }


  // imagePlaylistOfTheDay() {
  //    const playlistImages = this.props.playlists.map(image => (image.Playlist_image));
  //    if (playlistImages.length > 0) {
  //       return playlistImages[playlistImages.length-1]
  //    }
  // }


  sayAlbumOfTheDay(number) {
     const albumNames = this.props.albums.map(albumName => (albumName.Name));
     const albumDescriptions = this.props.albums.map(albumDescription => (albumDescription.Description));
     if (albumNames.length > 0) {
        return (
            <div>
                <h6 className="text-white font-weight-bold"> Album of the day:</h6>
                    <h5 className="text-white  font-weight-bold"> {albumNames[number]} </h5>
                <h6 className="text-white font-weight-normal"> {albumDescriptions[number]} </h6>
            </div>
        )
     }
  }

  // sayTrackOfTheDay() {
  //    const trackNames = this.props.tracks.map(track => (track.Name));
  //    const trackLicensing_rights = this.props.tracks.map(track => (track.Licensing_rights));
  //    if (trackNames.length > 0) {
  //       return (
  //           <div>
  //               <h6 className="text-white font-weight-bold"> Newest Track:</h6>
  //               <span><h5 className="text-white  font-weight-bold"> {trackNames[trackNames.length-1]} </h5></span>
  //               <h6 className="text-white font-weight-normal"> {trackLicensing_rights[trackLicensing_rights.length-1]} </h6>
  //           </div>
  //       )
  //    }
  // }


  // sayPlaylistOfTheDay() {
  //    const PlaylistNames = this.props.playlists.map(playlist => (playlist.Name));
  //    const PlaylistDescriptions = this.props.playlists.map(playlist => (playlist.Description));
  //    if (PlaylistNames.length > 0) {
  //       return (
  //           <div>
  //               <h6 className="text-white font-weight-bold"> Newest Playlist:</h6>
  //               <span><h5 className="text-white  font-weight-bold"> {PlaylistNames[PlaylistNames.length-1]} </h5></span>
  //               <h6 className="text-white font-weight-normal"> {PlaylistDescriptions[PlaylistDescriptions.length-1]} </h6>
  //           </div>
  //       )
  //    }
  // }




  render() {
    return (
      <Fragment>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={this.imageAlbumOfTheDay(0)} width="800" height="400"/>
              <div className="carousel-caption d-md-block">
                <div>
                    <h6 className="text-white font-weight-bold"> New Album:</h6>
                    {this.sayAlbumOfTheDay(0)}
                    <h5 className="text-white  font-weight-bold">  </h5>
                    <h6 className="text-white font-weight-normal">  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={this.imageAlbumOfTheDay(1)} width="800" height="400"/>
              <div className="carousel-caption d-md-block">
                <div>
                    <h6 className="text-white font-weight-bold"> New Album:</h6>
                    {this.sayAlbumOfTheDay(1)}
                    <h5 className="text-white  font-weight-bold">  </h5>
                    <h6 className="text-white font-weight-normal">  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={this.imageAlbumOfTheDay(2)} width="800" height="400"/>
              <div className="carousel-caption d-md-block">
                <div>
                    <h6 className="text-white font-weight-bold"> New Album:</h6>
                    {this.sayAlbumOfTheDay(2)}
                    <h5 className="text-white  font-weight-bold">  </h5>
                    <h6 className="text-white font-weight-normal">  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={this.imageAlbumOfTheDay(3)} width="800" height="400"/>
              <div className="carousel-caption d-md-block">
                <div>
                    <h6 className="text-white font-weight-bold"> New Album:</h6>
                    {this.sayAlbumOfTheDay(3)}
                    <h5 className="text-white  font-weight-bold">  </h5>
                    <h6 className="text-white font-weight-normal">  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={this.imageAlbumOfTheDay(4)} width="800" height="400"/>
              <div className="carousel-caption d-md-block">
                <div>
                    <h6 className="text-white font-weight-bold"> New Album:</h6>
                    {this.sayAlbumOfTheDay(4)}
                    <h5 className="text-white  font-weight-bold">  </h5>
                    <h6 className="text-white font-weight-normal">  </h6>
                </div>
              </div>
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
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  albums: state.albums.albums,
  tracks: state.tracks.tracks,
  playlists: state.playlists.playlists
});

export default connect(mapStateToProps, { getAlbumsNewest })(NewsFeed);
