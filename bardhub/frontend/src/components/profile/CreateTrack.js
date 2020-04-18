import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addTrack } from "../../actions/tracks";
import { getAlbumID } from "../../actions/albums";

export class CreateTrack extends Component {
  state = {
    Name: "",
    Song: null,
    Licensing_rights: "",
    Notes: "",
    Tag: null,
    Playlist: [],
  };
  static propTypes = {
    album: propTypes.object.isRequired,
    addTrack: propTypes.func.isRequired,
    getAlbumID: propTypes.func.isRequired
  };

componentDidMount() {
     this.props.getAlbumID(this.props.album.id);
  }

onSongChange = e => {
    this.setState({
      Song: e.target.files[0]
    })
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("Name", this.state.Name);
    form_data.append("Song", this.state.Song, this.state.Song.name);
    form_data.append("Licensing_rights", this.state.Licensing_rights);
    form_data.append("Notes", this.state.Notes);
    form_data.append("Album", this.props.album.id);
    this.props.addTrack(form_data);
  };

  render() {
    const {  Name, Song, Licensing_rights, Notes } = this.state;
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
              required
            />
          </div>
          <div className="form-group">
            <label>Song</label>
            <input
              className="form-control"
              type="file"
              accept="audio/mp3, audio/ogg, audio/wav"
              name="Song"
              onChange={this.onSongChange}
              required
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
           <div className="form-group"></div>
              <div className="form-group">
                <div className="form-group">
                  <label> Artist Notes</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Notes"
                    onChange={this.onChange}
                    value={Notes}
                  />
             </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state, ownprops){
  let id = ownprops.match.params.id;
  id = parseInt(id);
  let album = state.albums.albums.filter((album) => album.id == id)[0];
  if(album == null){
    album = { id }
  }
  return { album }
};

export default connect(mapStateToProps, { addTrack, getAlbumID })(CreateTrack);
