import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { getTracks, deleteTracks } from "../../actions/tracks";

export class ArtistPage extends Component {
  static PropTypes = {
    tracks: PropTypes.array.isRequired,
    getTracks: PropTypes.func.isRequired,
    deleteTracks: PropTypes.func.isRequired
  };

  componentDidMount() {
	      this.props.getTracks();
  }

  render() {
    return (
      <Fragment>
        <h2>Songs</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Tags</th>
              <th>Artist note</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.tracks.map(track => (
              <tr key={Track.id}>
                <td>{track.Track_id}</td>
				<td>We dont have track name</td>
                <td>{track.Tags}</td>
                <td>{track.Artist_note}</td>
                <td>
                  <button
                    onClick={this.props.deleteTracks.bind(this, track.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {""}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({
  ArtistPage: state.tracks.tracks
});

export default connect(mapStateToProps, { getTracks, deleteTracks })(ArtistPage);
