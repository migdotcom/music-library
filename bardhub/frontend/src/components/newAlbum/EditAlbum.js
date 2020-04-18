import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editAlbum } from "../../actions/albums";
import { resetErrors } from "../../actions/messages";
import { Link, Redirect, useParams} from 'react-router-dom';

export class EditAlbum extends Component {
  state = {
    id: 0,
    Name: "",
  	Description: "",
    Cover_image: null,
  };

  componentDidMount() {
    let album = this.props.album;
    console.log(album);
    this.setState({id: album.id, Name: album.Name, Description: album.Description, Cover_image: album.Cover_image});
  }

  static propTypes = {
    editAlbum: PropTypes.func.isRequired,
    album: PropTypes.object.isRequired,
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onImageChange = e => {
    this.setState({
      Cover_image: e.target.files[0]
    })
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let album = this.props.album;
    console.log(album);
    let form_data = new FormData();
    form_data.append("id", this.state.id);
    if(this.state.Name!=album.Name){
      form_data.append("Name", this.state.Name);
    }
    if(this.state.Description!=album.Description){
      form_data.append("Description", this.state.Description);
    }
    if(this.state.Cover_image != null && this.state.Cover_image != album.Cover_image){
        form_data.append('Cover_image', this.state.Cover_image, this.state.Cover_image.name);
    }
    this.props.editAlbum(form_data);
  };

  render() {
    const { Name, Description, Cover_image } = this.state;
    print
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Edit Album</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Album Name</label>
            <input
              className="form-control"
              type="text"
              name="Name"
              onChange={this.onChange}
              value={Name}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="Description"
              onChange={this.onChange}
              value={Description}
            />
          </div>
          <div className="form-group">
            <label>Cover Image</label>
            <input
              className="form-control"
              type="file"
              accept="image/png, image/jpeg"
              name="Cover_image"
              onChange={this.onImageChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownprops){
  let id = ownprops.match.params.id;
  id = parseInt(id);
  console.log(state.albums.albums);
  let album = state.albums.albums.filter((album) => album.id == id)[0];
  return { album };
}

export default connect(mapStateToProps, { editAlbum })(EditAlbum);