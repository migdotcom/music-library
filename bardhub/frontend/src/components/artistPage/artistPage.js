import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getTracks, deleteTracks } from "../../actions/tracks";
//new below
import { getAlbumsFromPastMonth } from "../../actions/albums"
export class ArtistPage extends Component {
    
  static propTypes = {
    tracks: propTypes.array,
    getTracks: propTypes.func.isRequired,
    deleteTracks: propTypes.func.isRequired
    getAlbumsFromPastMonth: propTypes.func.isRequired
  };

constructor(props) {   
	super(props)  
    console.log(props);
	this.state =
		{tracks: []     , selectedAlbum: null}
}

  componentDidMount() {
      console.log(this.props.searchedUser);
            this.setState({tracks: []});
	      this.props.getTracks(this.props.searchedUser);
          this.props.getAlbumsFromPastMonth();
          console.log(this.props.tracks);
          }

    viewSingleAlbumPage(selectedAlbum)
    {
        this.setState({selectedAlbum: selectedAlbum});
        console.log("Clicked album: " + this.state.selectedAlbum);
    }
  render() {
    return (
      <Fragment>
        
		<h3>Albums for specific artist</h3>
        <table className="table table-striped">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody >
          {this.props.tracks.map(track => (
              <tr key={track.id}>
				<td><a href="#" onClick = {() => this.viewSingleAlbumPage(track.Name)}> {track.Name} </a> </td>                    
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
