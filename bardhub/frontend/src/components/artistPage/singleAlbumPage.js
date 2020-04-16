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
    console.log(props);
	this.state =
		{tracks: []     } }

  componentDidMount() {
          this.setState({tracks: []});
	      //this.props.getTracks(this.props.searchedUser);
          }

  render() {
    return (
      <Fragment>
        
		<h3>Album title (pull from db)</h3>
        <table className="table table-striped">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>{this.props.message}</td></tr>
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
