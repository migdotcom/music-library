import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeAlbum } from "../../actions/albums";
import { resetErrors } from "../../actions/messages";
import { Link, Redirect} from 'react-router-dom';

export class CreateAlbum extends Component {
  state = {
    Name: "",
  	Description: "",
    Cover_image: null,
  };

  static propTypes = {
    makeAlbum: PropTypes.func.isRequired,
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
    let form_data = new FormData();
    form_data.append("Name", this.state.Name);
    form_data.append("Description", this.state.Description);
    form_data.append('Cover_image', this.state.Cover_image, this.state.Cover_image.name);
    this.props.makeAlbum(form_data);
  };

  render() {
    const { Name, Description, Cover_image } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Create Album</h2>
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
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { makeAlbum })(CreateAlbum);