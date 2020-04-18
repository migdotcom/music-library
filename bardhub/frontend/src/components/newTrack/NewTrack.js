import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getTracksNewest, deleteTracks } from "../../actions/tracks";

export class NewTrack extends Component {
  static propTypes = {
    tracks: propTypes.array,
    getTracksNewest: propTypes.func.isRequired,
    deleteTracks: propTypes.func.isRequired
  };

constructor(props) {
	super(props)
	this.state =
		{tracks: ["blank"]     } }

  componentDidMount() {
	      this.props.getTracksNewest();
  }

  render() {
    return (
      <Fragment>
        <h2>Newest Track</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Licensing_rights</th>
              <th>Date Created</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {this.props.tracks.map(track => (
              <tr key={track.id.toString(10)}>
                <td>{track.id.toString(10)}</td>
                <td>{track.Name}</td>
				<td>{track.Licensing_rights!= null ? track.Licensing_rights : "not yet"}</td>
				<td>{track.Time_stamp.toString().substring(0, 10)}</td>
              </tr>
		  ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  tracks: state.tracks.tracks
});

export default connect(mapStateToProps, { getTracksNewest, deleteTracks })(NewTrack);
