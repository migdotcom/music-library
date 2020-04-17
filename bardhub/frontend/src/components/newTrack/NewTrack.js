import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getTrack, deleteTrack } from "../../actions/tracks";

export class NewTrack extends Component {
  static propTypes = {
    tracks: propTypes.array,
    getTrack: propTypes.func.isRequired,
    deleteTrack: propTypes.func.isRequired
  };

constructor(props) {
	super(props)
	this.state =
		{tracks: ["blank"]     } }

  componentDidMount() {
	      this.props.getTrack();
  }

  render() {
    return (
      <Fragment>
        <h2>Newest Album!</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Was Born At</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {this.props.tracks.map(track => (
              <tr key={track.id.toString(10)}>
                <td>{track.id.toString(10)}</td>
                <td>{track.Name}</td>
				<td>{track.Description}</td>
				<td>{track.Time_stamp}</td>
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

export default connect(mapStateToProps, { getTrack, deleteTrack })(NewTrack);
