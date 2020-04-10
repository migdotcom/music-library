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
		{tracks: []     } }

  componentDidMount() {
	      this.props.getTracks();
  }

  render() {
    return (
      <Fragment>
        
		<h3>Albums for specific artist</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Album name</th>
            </tr>
          </thead>
          <tbody>
          {this.props.tracks.map(track => (
              <tr key={track.id}>
				<td>{track.Name}</td>
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
