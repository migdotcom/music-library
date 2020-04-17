import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { makeTrack } from "../../actions/tracks";
import { resetErrors } from "../../actions/messages";
import { Link, Redirect} from 'react-router-dom';

export class CreateTrack extends Component {
  state = {
    Name: "",
  	Licensing_rights: "",
    URL: "",
  };

  static propTypes = {
    makeTrack: propTypes.func.isRequired,
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  // onImageChange = e => {
  //   this.setState({
  //     URL: e.target.files[0]
  //   })
  // };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("Name", this.state.Name);
    form_data.append("Licensing_rights", this.state.Licensing_rights);
    form_data.append('URL', this.state.URL);
    this.props.makeTrack(form_data);
  };

  render() {
    const { Name, Licensing_rights, URL } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Create Track</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Track Name</label>
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
            <label>Licensing_rights</label>
            <input
              className="form-control"
              type="text"
              name="Licensing_rights"
              onChange={this.onChange}
              value={Licensing_rights}
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input
              className="form-control"
              type="text"
              name="URL"
              onChange={this.onChange}
              value={URL}
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

export default connect(null, { makeTrack })(CreateTrack);