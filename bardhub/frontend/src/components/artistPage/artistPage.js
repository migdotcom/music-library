import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { AlbumDisplay } from "./AlbumDisplay"
import propTypes from "prop-types";
import { getAlbumsUser, getAlbumsFromPastMonth, CheatViews } from "../../actions/albums";
import { getUserTotalPlaycount } from "../../actions/users";
export class ArtistPage extends Component {
  static propTypes = {
    albums: propTypes.array,
    getAlbumsUser: propTypes.func.isRequired,
    CheatViews: propTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { albums: [], selectedAlbum: null, userTotalPlaycount: 12123213 };
  }

  componentDidMount() {
    console.log(this.props.searchedUser);
    this.setState({ albums: [] });
    this.props.getAlbumsUser(this.props.searchedUser);
    this.setState({album_pastmonth_count: this.props.getAlbumsFromPastMonth()});
    this.setState({userTotalPlaycount: this.props.getUserTotalPlaycount("apogii")});
    console.log("State after didmount: ");
    console.log(this.state.userTotalPlaycount);
    //getAlbumsFromPastMonth();
  }

  viewSingleAlbumPage(selectedAlbum) {
    this.setState({ selectedAlbum: selectedAlbum });
    console.log("Clicked album: " + this.state.selectedAlbum);
  }
  render() {
    console.log(this.props.albums);
    return (
      <Fragment>
        <h3>Albums for specific artist</h3>
        <div className="justify-content-center">
          <div className="col-lg-10">
            {this.props.albums.map((album) => AlbumDisplay({ album }))}
          </div>
        </div>
 <div> 
            <h1> Report 1: Albums posted in the past month: {this.props.album_pastmonth_count} </h1>
            </div>
            
             <div> 
            <h1> Report 2: Total playcount for logged-in user: {this.props.userTotalPlaycount.userTotalPlaycount} </h1>
            </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
    album_pastmonth_count: state.albums.album_pastmonth_count,
    userTotalPlaycount: state.users.userTotalPlaycount

});

export default connect(mapStateToProps, {getAlbumsUser, getAlbumsFromPastMonth, CheatViews, getUserTotalPlaycount })(ArtistPage);
