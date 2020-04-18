import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getAlbumsUser, getAlbumsFromPastMonth, CheatViews } from "../../actions/albums";
import { getUserTotalPlaycount , getUser } from "../../actions/users";
export class ArtistPage extends Component {
  static propTypes = {
    albums: propTypes.array,
    getAlbumsUser: propTypes.func.isRequired,
    CheatViews: propTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { albums: [], selectedAlbum: null, userTotalPlaycount: null, userData: [] };
  }

  componentDidMount() {
    this.setState({ albums: [] });
    this.props.getAlbumsUser(this.props.searchedUser);
    this.props.getUser(this.props.searchedUser);
    this.setState({album_pastmonth_count: this.props.getAlbumsFromPastMonth()});
    this.setState({userTotalPlaycount: this.props.getUserTotalPlaycount("apogii")});
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
            {this.props.albums.map((album) => (
              <div className="card text-center border-dark mb-3 ">
                <div style={{ backgroundColor: "black" }}>
                  <div className="card-body text-light">
                    <h5 className="card-title font-weight-bold ">
                      {album.Name}
                    </h5>
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
    userData: state.users.users,
  albums: state.albums.albums,
    album_pastmonth_count: state.albums.album_pastmonth_count,
    userTotalPlaycount: state.users.userTotalPlaycount

});

export default connect(mapStateToProps, {getUser, getAlbumsUser, getAlbumsFromPastMonth, CheatViews, getUserTotalPlaycount })(ArtistPage);
