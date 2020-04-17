import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getTracks, deleteTrack } from "../../actions/tracks";

export class Tracks extends Component {
  static propTypes = {
    tracks: propTypes.array,
    getTracks: propTypes.func.isRequired,
    deleteTrack: propTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getTracks();
  }
  render() {
    return (
      <Fragment>
        <h2>Tracks</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Notes</th>
              <th>Name</th>
              <th>Licensing rights </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.tracks.map((track) => (
              <tr key={track.Notes}>
                <td>{track.Artist}</td>
                <td>{track.Name}</td>
                <td>{track.Licensing_rights}</td>
                <td>
                  <button
                    onClick={this.props.deleteTrack.bind(this, track.id)}
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

const mapStateToProps = (state) => ({
  tracks: state.tracks.tracks,
});

export default connect(mapStateToProps, { getTracks, deleteTrack })(Tracks);
