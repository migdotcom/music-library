import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTrack } from "../../actions/tracks";

export class Form extends Component {
  state = {
    Album: "",
    Name: "",
    URL: "",
    Licensing_rights: "",
    Notes: "",
    Tag: null,
    Playlist: [],
  };
  static propTypes = {
    addTrack: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { Artist, Album, Name, URL, Licensing_rights, Notes } = this.state;
    const track = { Artist, Album, Name, URL, Licensing_rights, Notes };
    this.props.addTrack(track);
    this.setState = {
      Artist: "",
      Album: "",
      Name: "",
      URL: "",
      Licensing_rights: "",
      Notes: "",
    };
  };

  render() {
    const { Artist, Album, Name, URL, Licensing_rights, Notes } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Track</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Song Name</label>
            <input
              className="form-control"
              type="text"
              name="Name"
              onChange={this.onChange}
              value={Name}
            />
          </div>
          <div className="form-group">
            <label> Artist</label>
            <input
              className="form-control"
              type="text"
              name="Artist"
              onChange={this.onChange}
              value={Artist}
            />
          </div>
          <div className="form-group">
            <label>Cover</label>
            <input
              className="form-control"
              type="text"
              name="URL"
              onChange={this.onChange}
              value={URL}
            />
          </div>
          <div className="form-group">
            <div className="form-group">
              <label>Licensing Rights</label>
              <input
                className="form-control"
                type="text"
                name="Licensing_rights"
                onChange={this.onChange}
                value={Licensing_rights}
              />
            </div>
            <div className="form-group">
              <div className="form-group">
                <label>Album</label>
                <input
                  className="form-control"
                  type="text"
                  name="Album"
                  onChange={this.onChange}
                  value={Album}
                />
              </div>
              <div className="form-group"></div>
              <div className="form-group">
                <div className="form-group">
                  <label> Artist Notes</label>
                  <input
                    className="form-control"
                    type="message"
                    name="Notes"
                    onChange={this.onChange}
                    value={Notes}
                  />
                </div>
              </div>
              <div className="form-group"></div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTrack })(Form);
