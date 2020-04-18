import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

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
    this.props.getAlbumsUser(this.props.user.Name);
    console.log("State after didmount: ");
    //getAlbumsFromPastMonth();
  }

  viewSingleAlbumPage(selectedAlbum) {
    this.setState({ selectedAlbum: selectedAlbum });
    console.log("Clicked album: " + this.state.selectedAlbum);
  }
  render() {
    return (
      <Fragment>
        <h3>My Albums</h3>
        <div className="justify-content-center">
          <div className="col-lg-10">
            {this.props.albums.map((album) => (
              <div className="card text-center border-dark mb-3 " key={album.id}>
                <div style={{ backgroundColor: "black" }}>
                  <div className="card-body text-light">
                    <h5 className="card-title font-weight-bold ">
                      {album.Name}
                    </h5>
                    <Link to={"/editalbum/" + album.id} >Edit</Link>
                    <p className="card-text ">{album.Description}</p>
                    <img
                      className="card-img-top"
                      src={album.Cover_image}
                      width="350"
                      height="350"
                      alt="Card image cap"
                    />
                    <p className="card-text">Views: {album.Count}</p>
                    <button onClick={() => this.props.CheatViews(album.id)}>Cheat Viewcount</button>
                    <p className="card-text">{album.Time_stamp}</p>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/makealbum" className="nav-link">
               Create New Album
            </Link>
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {this.props.albums.map((album) => (
              <tr key={album.id}>
                <td>
                  <a
                    href="#"
                    onClick={() => this.viewSingleAlbumPage(album.Name)}
                  >
                    {" "}
                    {album.Name}{" "}
                  </a>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
    albums: state.albums.albums,
    user: state.login.user
});

export default connect(mapStateToProps, {getAlbumsUser, CheatViews})(UserAlbums);
