import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import propTypes from "prop-types";
import { getEvents } from "../../actions/events";

export class NewEvent extends Component {
  static propTypes = {
    events: propTypes.array,
    getEvents: propTypes.func.isRequired,
  };

constructor(props) {
	super(props)
	this.state =
		{events: ["blank"]     } }

  componentDidMount() {
	      this.props.getEvents();
  }

  render() {
    return (
      <Fragment>
        <h2>Newest Events</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Time_happening</th>
              <th>Date Created</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {this.props.events.map(event => (
              <tr key={event.id.toString(10)}>
                <td>{event.id.toString(10)}</td>
                <td>{event.Location}</td>
				<td>{event.Time_happening!= null ? event.Time_happening : "not yet"}</td>
				<td>{event.Time_stamp.toString().substring(0, 10)}</td>
              </tr>
		  ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  events: state.events.events
});

export default connect(mapStateToProps, { getEvents })(NewEvent);
