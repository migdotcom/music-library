import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAlbumsFromPastMonth, getAlbumsBetween } from "../../actions/albums";
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
    Date_from: "",
    Date_to: "",
    searched_between: false,
    searched_genre: false,
    searched_user: false,
    error: null};

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

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  onSubmit = e => {
    e.preventDefault();
    if(this.state.Date_from <= this.state.Date_to){
      this.props.getAlbumsBetween(this.state.Date_from, this.state.Date_to);
      this.setState({searched_between: true})
    }
    else{
      this.setState({error: "Please make sure the start date is smaller than the end date!"})
    }
  };

  render() {
    return (
      <Fragment>
        <h1>Reports</h1>
        <div className="justify-content-center">
            <div className="card card-body mt-4 mb-4">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>From</label>
                  <input
                    className="form-control"
                    type="date"
                    name="Date_from"
                    onChange={this.onChange}
                    value={this.state.Date_from}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>To</label>
                  <input
                    className="form-control"
                    type="date"
                    name="Date_to"
                    onChange={this.onChange}
                    value={this.state.Date_to}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Search Album Count
                  </button>
                </div>
                {this.state.error == null ? <div></div> : (<p>{this.state.error}</p>)}
              </form>
            </div>
            {!this.state.searched_between ? (<h3>Please search for dates with the form above.</h3>) : (<h3> Total Number of Albums Posted in between {this.state.Date_from} and {this.state.Date_to}: {this.props.albums_between} </h3>)}
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
    albums_between: state.albums.albums_between,
    userTotalPlaycount: state.users.userTotalPlaycount,
    tracksOfGenre: state.reports.tracksOfGenre

});

export default connect(mapStateToProps, {getAlbumsFromPastMonth, getUserTotalPlaycount , gettracksOfGenre, getAlbumsBetween})(Reports);