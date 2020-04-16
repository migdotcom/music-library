import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getTracksAlbum } from "../../actions/tracks";

export class TracksPage extends Component {
  static propTypes = {
    tracks: propTypes.array,
    getTracksAlbum: propTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { albumName: props.message, track: [] };
  }

  componentDidMount() {
    this.setState({ tracks: [] });
    console.log("album Name", this.state.albumName);
    this.props.getTracksAlbum(this.props.message);
    console.log(
      "TrackPage search user == componentdidmount:   ",
      this.props.message
    );
  }

  render() {
    return (
      <Fragment>
        <h3>Tracks specific album</h3>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Play the Song</th>
              <th>Licensing Rights</th>
              <th>Notes</th>
              <th>Created on</th>
              <th>Artist</th>
              <th>Album</th>
              {/* <th>Tag</th> */}
            </tr>
          </thead>
          <tbody>
            {this.props.tracks.map((track) => (
              <tr key={track.id}>
                <td>{track.Name}</td>
                <td>
                  <form action={track.URL}>
                    <div className="row justify-content-center">
                      <button type="Play Now"></button>
                    </div>
                  </form>
                </td>
                <td>{track.Licensing_right}</td>
                <td>{track.Notes}</td>
                <td>{track.Time_stamp}</td>
                <td>{track.Artist}</td>
                <td>{track.Album}</td>
                {/* <td>{track.Tag}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  tracks: state.tracks.tracks,
});

export default connect(mapStateToProps, { getTracksAlbum })(TracksPage);
