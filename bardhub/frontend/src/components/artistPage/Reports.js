import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAlbumsFromPastMonth } from "../../actions/albums";
/* import propTypes from "prop-types"; */
//gonna create all functions and call them here
export class Reports extends Component {
/*   static propTypes = {
    albums: propTypes.array,
    getAlbumsUser: propTypes.func.isRequired,
    CheatViews: propTypes.func.isRequired
  }; */
/*     def execute_query():
    with connection.cursor() as cursor:
        queryset = Album.objects.raw('SELECT * FROM album_album WHERE Time_stamp BETWEEN date_sub(now(), interval 1 month) AND date_add(now(), interval 1 day');
        return queryset
     */
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { album_pastmonth_count: null, user_total_playcount: null };
  }

  componentDidMount() {
    this.setState({album_pastmonth_count: getAlbumsFromPastMonth()});
    console.log(this.state);
  }
  
  render() {
    return (
      <Fragment>
        <h1>Reports</h1>
        <div className="justify-content-center">
            <h3> {this.state.album_pastmonth_count} </h3>
            <h3> {this.state.user_total_playcount} </h3>
        </div>
      </Fragment>
            );
  }
}

const mapStateToProps = (state) => ({
    album_pastmonth_count: state.albums.album_pastmonth_count
});

export default connect(mapStateToProps, {getAlbumsFromPastMonth })(Reports);