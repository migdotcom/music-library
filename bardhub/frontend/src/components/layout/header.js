import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout, CheatFollowers } from '../../actions/login';
import { Link }  from 'react-router-dom';


export class header extends Component {
    static propTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired,
	    CheatFollowers: PropTypes.func.isRequired

    };
    render() {
      const { isAuthenticated, user } = this.props.auth;
      const authenticated = (
        <Fragment>
        <li className="nav-item">
            <Link to="/albums" className="nav-link">
                Albums
            </Link>
        </li>
        <li className="nav-item">
           <Link to="/reports" className="nav-link">
                Reports
            </Link>
        </li>
        <li className="nav-item">

          <button onClick={this.props.CheatFollowers} className="nav-link btn">
             Cheat Followers
          </button>

        </li>
       <li className="nav-item">
          <button onClick={this.props.logout} className="nav-link btn">
              Logout
          </button>
        </li>
        </Fragment>)//
      const guest = (
        <Fragment>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
               Login
            </Link>
          </li>
        </Fragment>)//
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand">BardHub</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Search</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link" to="/newsfeed">Newest</Link>
                </li>
                {isAuthenticated ? authenticated : guest}
              </ul>
            </div>
          </nav>
        )
    }
}
const mapStateToProps = (state) => ({
  auth: state.login,
});

export default connect(mapStateToProps, { logout, CheatFollowers })(header);
