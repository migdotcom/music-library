import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAlbumsFromPastMonth } from "../../actions/albums";
import { getUserTotalPlaycount  } from "../../actions/users";

export class Reports extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { album_pastmonth_count: null, user_total_playcount: null };
  }

  componentDidMount() {
    this.setState({album_pastmonth_count: this.props.getAlbumsFromPastMonth()});
    this.setState({userTotalPlaycount: this.props.getUserTotalPlaycount()});

    console.log(this.state);
  }
  
  render() {
    return (
      <Fragment>
        <h1>Reports</h1>
        <div className="justify-content-center">
            <h3> Total Number of Albums Posted in the past Month: {this.props.album_pastmonth_count} </h3>
            <h1> Report 2: Total playcount for logged-in user: {this.props.userTotalPlaycount.userTotalPlaycount} </h1>
        </div>
      </Fragment>
            );
  }
}

const mapStateToProps = (state) => (
{
album_pastmonth_count: state.albums.album_pastmonth_count, 
    userTotalPlaycount: state.users.userTotalPlaycount

});

export default connect(mapStateToProps, {getAlbumsFromPastMonth, getUserTotalPlaycount })(Reports);