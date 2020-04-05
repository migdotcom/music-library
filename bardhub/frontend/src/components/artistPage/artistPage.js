import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getTracks, deleteTracks } from "../../actions/tracks";

export class ArtistPage extends Component {
  static propTypes = {
    tracks: propTypes.array,
    getTracks: propTypes.func.isRequired,
    deleteTracks: propTypes.func.isRequired
  };

constructor(props) {   
	super(props)     
	this.state =
		{tracks: ["blank"]     } }

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
              <th>Notes</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {this.props.tracks.map(track => (
              <tr key={track.id.toString(10)}>
                <td>{track.id.toString(10) }</td>
				<td>{track.Name}</td>
                <td>{track.Tags}</td> 
                <td>{track.Artist_note}</td>
                <td>
                  <button
                    onClick={this.props.deleteTracks.bind(this, track.id)}
                    className="btn btn-danger btn-sm">
                    {""}
                    Delete
                  </button>
                </td>
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

export default connect(mapStateToProps, { getTracks, deleteTracks })(ArtistPage);
