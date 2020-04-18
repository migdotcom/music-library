import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { UserAlbumDisplay } from "./UserAlbumDisplay";
import store from "../../store";
import propTypes from "prop-types";
import { getAlbumsUser, CheatViews } from "../../actions/albums";
import { Link, Redirect} from 'react-router-dom';

export class UserAlbums extends Component {
  static propTypes = {
    albums: propTypes.array,
    getAlbumsUser: propTypes.func.isRequired,
    CheatViews: propTypes.func.isRequired,
    user: propTypes.object.isRequired
  };

  componentDidMount() {
    this.setState({ albums: [] });
    store.dispatch({type: "RESET_ALBUMS"});
    this.props.getAlbumsUser(this.props.user.username);
    console.log("State after didmount: ");
    //getAlbumsFromPastMonth();
  }

  viewSingleAlbumPage(selectedAlbum) {
    this.setState({ selectedAlbum: selectedAlbum });
    console.log("Clicked album: " + this.state.selectedAlbum);
  }
  render() {
    console.log(this.props.user)
    return (
      <Fragment>
        <h3>My Albums</h3>
        <div className="justify-content-center">
          <div className="col-lg-10">
            {this.props.albums.map((album) => (
              UserAlbumDisplay({album})
            ))}
            <Link to="/makealbum" className="nav-link">
               Create New Album
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
    albums: state.albums.albums,
    user: state.login.user
});

export default connect(mapStateToProps, {getAlbumsUser, CheatViews})(UserAlbums);
