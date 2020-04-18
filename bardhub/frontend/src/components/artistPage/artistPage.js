import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { AlbumDisplay } from "./AlbumDisplay"
import propTypes from "prop-types";
import { getAlbumsUser, CheatViews } from "../../actions/albums";
import {  getUser } from "../../actions/users";
export class ArtistPage extends Component {
  static propTypes = {
    albums: propTypes.array,
    getAlbumsUser: propTypes.func.isRequired,
    CheatViews: propTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { albums: [], selectedAlbum: null, userData: [] };
  }

  componentDidMount() {
    this.setState({ albums: [] });
    this.props.getAlbumsUser(this.props.searchedUser);
    this.props.getUser(this.props.searchedUser);
    console.log("State: ");
    console.log(this.state);
  }

  viewSingleAlbumPage(selectedAlbum) {
    this.setState({ selectedAlbum: selectedAlbum });
    console.log("Clicked album: " + this.state.selectedAlbum);
  }
  render() {
          {console.log(this.state)};
    return (
      <Fragment>
        <h3>{this.props.searchedUser}'s Albums</h3>
        <div className="justify-content-center">
          <div className="col-lg-10">
            {this.props.albums.map((album) => AlbumDisplay({ album }))}
          </div>
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
    userData: state.users.users,
  albums: state.albums.albums,
});

export default connect(mapStateToProps, {getUser, getAlbumsUser, CheatViews })(ArtistPage);
