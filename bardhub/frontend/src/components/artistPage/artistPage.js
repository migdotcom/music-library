import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//leads come down from reducer to component as a prop
import PropTypes from "prop-types";
import { getTracks, deleteTracks } from "../../actions/tracks";
//new below
import { getAlbumsFromPastMonth } from "../../actions/albums";
import { getUserTotalPlaycount } from "../../actions/users";
console.log(getUserTotalPlaycount())
export class ArtistPage extends Component {

  static propTypes = {
    tracks: PropTypes.array,
    getTracks: PropTypes.func.isRequired,
    deleteTracks: PropTypes.func.isRequired,
    getAlbumsFromPastMonth: PropTypes.func.isRequired,
    getUserTotalPlaycount: PropTypes.func.isRequired
    };

constructor(props) {   
    //the constructor isn't loading because of error in maptstatetoprops
    //super(props) may not be necessary
	super(props)  
    console.log(props);
	this.state =
		{tracks: []     , selectedAlbum: null, album_pastmonth_count: null, userTotalPlaycount: null};
    }

componentDidMount() {
  console.log("Searched user: " + this.props.searchedUser);
  this.props.getTracks(this.props.searchedUser);
  this.setState({album_pastmonth_count: this.props.getAlbumsFromPastMonth()});
  console.log("Albums for user " + this.props.searchedUser + ": ");
  console.log(this.props.tracks);
  console.log("album_pastmonth_count: " + this.props.album_pastmonth_count);
}

//{this.setState({userTotalPlaycount: this.props.getUserTotalPlaycount()}); } 
    viewSingleAlbumPage(selectedAlbum)
    {
        this.setState({selectedAlbum: selectedAlbum});
        console.log("Clicked album: " + this.state.selectedAlbum);
        this.props.getUserTotalPlaycount();
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
        <div> 
            <p> album pastmonth_count: {this.props.album_pastmonth_count} </p>
            </div>
      </Fragment>
      
    )
  }
}

//map state of redux in reducers/albums.js to props of this component in here artistpage
const mapStateToProps = state => ({
  tracks: state.tracks.tracks,
  album_pastmonth_count: state.albums.album_pastmonth_count,
  userTotalPlaycount: state.users.users
})

export default connect(mapStateToProps, { getTracks, deleteTracks, getAlbumsFromPastMonth, getUserTotalPlaycount })(ArtistPage);
