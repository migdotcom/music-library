import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { editTrack, getTrackID } from "../../actions/tracks";

export class EditTrack extends Component {
  state = {
    Name: "",
    Song: null,
    Licensing_rights: "",
    Notes: "",
    Genre: "",
    Playlist: [],
  };
  static propTypes = {
    id: propTypes.int,
    track: propTypes.object.isRequired,
    editTrack: propTypes.func.isRequired,
    getTrackID: propTypes.func.isRequired
  };

componentDidMount() {
     this.props.getTrackID(this.props.id);
     let track = this.props.track;
     if(track.Tag!=null){
      this.setState({Genre: track.Tag.Genre})
     }
     this.setState({Licensing_rights: track.Licensing_rights, Name: track.Name, Notes: track.Notes})
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
    let track = this.props.track;
    let form_data = new FormData();
    form_data.append("id", this.props.id);
    if(this.state.Name!=track.Name){
      form_data.append("Name", this.state.Name);
    }
    if(this.state.Song!=null){
      form_data.append("Song", this.state.Song, this.state.Song.name);
    }
    if(this.state.Licensing_rights!=track.Licensing_rights){
      form_data.append("Licensing_rights", this.state.Licensing_rights);
    }
    if(this.state.Notes!=track.Notes){
      form_data.append("Notes", this.state.Notes);
    }
    if((track.Tag==null && this.state.Genre != "") || (track.Tag!=null && this.state.Genre!=track.Tag.Genre)){
      form_data.append("Genre", this.state.Genre);
    }
    this.props.editTrack(form_data);
  };

  render() {
    const {  Name, Song, Licensing_rights, Notes, Genre } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Edit Track</h2>
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
            <div className="form-group"></div>
              <div className="form-group">
                <div className="form-group">
                  <label> Genre </label>
                  <input
                    className="form-control"
                    type="text"
                    name="Genre"
                    onChange={this.onChange}
                    value={Genre}
                  />
             </div>
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

function mapStateToProps (state, ownprops){
  let id = ownprops.match.params.id;
  id = parseInt(id);
  let track = state.tracks.tracks.filter((track) => track.id == id)[0];
  if(track == null){
    track = { id }
  }
  return { track, id }
};

export default connect(mapStateToProps, { editTrack, getTrackID })(EditTrack);
