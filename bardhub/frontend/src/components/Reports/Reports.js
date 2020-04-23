import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAlbumsFromPastMonth } from "../../actions/albums";
import { getUserTotalPlaycount } from "../../actions/users";
import { gettracksOfGenre } from "../../actions/reports";
import { TrackDisplay } from "../ArtistPage/TrackDisplay";
import UserSearch from "../ArtistPage/UserSearch";
//Repurpose UserSearch for general search
import propTypes from "prop-types";

function RenderTrack(props) {
  let { track } = props;
  return (
    <p>
      {"Album: " +
        track.Album +
        "; Track: " +
        track.Track +
        "; Artist: " +
        track.Artist}
    </p>
  );
}

export class Reports extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      album_pastmonth_count: null,
      user_total_playcount: null,
      tracksOfGenre: [],
      searchedGenre: null,

      userTotalPlaycount: [],
      searchedUserPlaycount: null,
    };
  }

  static propTypes = {
    tracksOfGenre: propTypes.array,
    userTotalPlaycount: propTypes.userTotalPlaycount,
  };

  componentDidMount() {
    var passedGenreObj = { genre: this.state.searchedGenre };
    var passedUser = { username: this.state.searchedUserPlaycount };

    this.setState({
      album_pastmonth_count: this.props.getAlbumsFromPastMonth(),
    });

    this.setState({
      userTotalPlaycount: this.props.getUserTotalPlaycount(passedUser),
    });

    this.setState({
      tracksOfGenre: this.props.gettracksOfGenre(passedGenreObj),
    });

    console.log(this.state);
  }

  /*   componentDidMount() {
    this.setState({album_pastmonth_count: this.props.getAlbumsFromPastMonth()});
    this.setState({userTotalPlaycount: this.props.getUserTotalPlaycount()});
    var passedGenreObj = {genre: "Pop"};
    this.setState({tracksOfGenre: this.props.gettracksOfGenre(passedGenreObj));

    console.log(this.state);
  } } */

  updatesearchedGenreFromChild = (data_from_child) => {
    var passedGenreObj = { genre: this.state.searchedGenre };
    console.log("state in updatesearchedGenreFromChild: ");
    console.log(this.state);
    this.setState({ searchedGenre: data_from_child });
    this.setState({
      tracksOfGenre: this.props.gettracksOfGenre(passedGenreObj),
    });
    console.log(this.state);
  };

  updatesearchedUserPlaycountFromChild = (data_from_child) => {
    var passedUser = { username: this.state.searchedUserPlaycount };
    console.log(this.state);
    this.setState({ searchedUserPlaycount: data_from_child });
    this.setState({
      userTotalPlaycount: this.props.getUserTotalPlaycount(passedUser),
    });
    console.log(this.state);
  };

  render() {
    console.log(this.props.tracksOfGenre);
    return (
      <Fragment>
        <h1>Reports</h1>
        <div className="justify-content-center">
          <h3>
            {" "}
            Total Number of Albums Posted in the past Month:{" "}
            {this.props.album_pastmonth_count}{" "}
          </h3>

          <div>
            <UserSearch
              messageToParent={this.updatesearchedUserPlaycountFromChild.bind(
                this
              )}
              whichSearch="Username"
            />
          </div>
          <h3>
            {" "}
            Report 2: Total playcount for logged-in user:{" "}
            {this.props.userTotalPlaycount.userTotalPlaycount}{" "}
          </h3>

          <div>
            <UserSearch
              messageToParent={this.updatesearchedGenreFromChild.bind(this)}
              whichSearch="Genres"
            />
          </div>
          <h3> Report 3: Tracks for genre {this.state.searchedGenre}: </h3>
          {console.log("This.props.tracksOfGenre: ")}
          {console.log(this.props.tracksOfGenre)}
          {this.props.tracksOfGenre.map((track) => RenderTrack({ track }))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  album_pastmonth_count: state.albums.album_pastmonth_count,
  userTotalPlaycount: state.users.userTotalPlaycount,
  tracksOfGenre: state.reports.tracksOfGenre,
});

export default connect(mapStateToProps, {
  getAlbumsFromPastMonth,
  getUserTotalPlaycount,
  gettracksOfGenre,
})(Reports);
