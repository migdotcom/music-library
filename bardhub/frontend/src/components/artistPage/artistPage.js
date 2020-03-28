import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
//import { getLeads, deleteLeads } from "../../actions/leads";


export class artistPage extends Component {
	/*
  static PropTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLeads: PropTypes.func.isRequired
  };


  componentDidMount() {
    this.props.getLeads();
  */
  }
  render() {
    return (
      <Fragment>
        <h2>Artist</h2> //replace with call to database
        <table className="table table-striped">
          <thead>
            <tr>
			<th> HELLO WORLD
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>
                  <button
                    //onClick={this.props.deleteLeads.bind(this, lead.id)}
					//put onClick here
                    className="btn btn-danger btn-sm"
                  >
                    {""}
                    BLANK
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

/*
const mapStateToProps = state => ({
  artistPage: state
});
*/

export default connect(mapStateToProps, { getLeads, deleteLeads })(artistPage);
