import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getAlbums, deleteAlbums } from "../../actions/albums";

export class NewAlbum extends Component {
  static propTypes = {
    albums: propTypes.array,
    getAlbums: propTypes.func.isRequired,
    deleteAlbums: propTypes.func.isRequired
  };

constructor(props) {
	super(props)
	this.state =
		{albums: ["blank"]     } }

  componentDidMount() {
	      this.props.getAlbums();
  }

  render() {
    return (
      <Fragment>
        <h2>Newest Album!</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Was Born At</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {this.props.albums.map(album => (
              <tr key={album.id.toString(10)}>
                <td>{album.id.toString(10)}</td>
                <td>{album.Name}</td>
				<td>{album.Description}</td>
				<td>{album.Time_stamp}</td>
              </tr>
		  ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  albums: state.albums.albums
});

export default connect(mapStateToProps, { getAlbums, deleteAlbums })(NewAlbum);
