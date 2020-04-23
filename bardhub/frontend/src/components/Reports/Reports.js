import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAlbumsFromPastMonth } from "../../actions/albums";
import { getUserTotalPlaycount  } from "../../actions/users";
import { gettracksOfGenre } from "../../actions/reports";
import { TrackDisplay } from "../ArtistPage/TrackDisplay";
import UserSearch from "../ArtistPage/UserSearch";
//Repurpose UserSearch for general search
import propTypes from "prop-types";

function RenderTrack(props){
  let { track } = props;
  return(<p>{"Album: " + track.Album + "; Track: " + track.Track + "; Artist: " + track.Artist}</p>);//
}

export class Reports extends Component {
  state = {
    albums_pastmonth_count: null,
    searched_genre: false,
    searched_user: false};

componentDidMount() {
    this.setState({album_pastmonth_count: this.props.getAlbumsFromPastMonth()});

    console.log(this.state);
  }

/*   componentDidMount() {
    this.setState({album_pastmonth_count: this.props.getAlbumsFromPastMonth()});
    this.setState({userTotalPlaycount: this.props.getUserTotalPlaycount()});
    var passedGenreObj = {genre: "Pop"};
    this.setState({tracksOfGenre: this.props.gettracksOfGenre(passedGenreObj));

    console.log(this.state);
  } } */

  updatesearchedUserFromChild = (data_from_child) => {
    var passedUserObj = {username: data_from_child};
    this.props.getUserTotalPlaycount(passedUserObj)
    this.setState({searched_user: true})
    };
  

    updatesearchedGenreFromChild = (data_from_child) => {
    var passedGenreObj = {genre: data_from_child};
    this.props.gettracksOfGenre(passedGenreObj)
    this.setState({searched_genre: true})
    };
  
  render() {
    console.log(this.props.tracksOfGenre);
    return (
      <Fragment>
        <h1>Reports</h1>
        <div className="justify-content-center">
            <h3> Total Number of Albums Posted in the past Month: {this.props.album_pastmonth_count} </h3>
            <UserSearch
          messageToParent={this.updatesearchedUserFromChild.bind(this)} whichSearch = "Users for Total Playcounts"
        />
            {!this.state.searched_user ? (<h3>Please Search for a User</h3>) : (<h3> Total playcount for searched user: {this.props.userTotalPlaycount.userTotalPlaycount} </h3>)}
            <div> 
            <UserSearch
          messageToParent={this.updatesearchedGenreFromChild.bind(this)} whichSearch = "Genres for Tracks"
        />
        </div>
            
            {!this.state.searched_genre ? (<h3>Please Search for a Genre</h3>) : (<h3> Tracks for searched genre: {this.props.tracksOfGenre.length == 0 ? (<p>No Tracks Found</p>) : this.props.tracksOfGenre.map((track) => (RenderTrack({ track })))}</h3>)}
        </div>
      </Fragment>
            );
  }
}

const mapStateToProps = (state) => (
{
album_pastmonth_count: state.albums.album_pastmonth_count, 
    userTotalPlaycount: state.users.userTotalPlaycount,
    tracksOfGenre: state.reports.tracksOfGenre

});

export default connect(mapStateToProps, {getAlbumsFromPastMonth, getUserTotalPlaycount , gettracksOfGenre})(Reports);