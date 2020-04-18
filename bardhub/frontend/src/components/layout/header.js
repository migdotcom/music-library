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
          <button onClick={this.props.logout} className="nav-link btn">
              Logout
          </button>
        </li>
        <li className="nav-item">
            <Link to="/albums" className="nav-link">
                Albums
            </Link>
        </li>
        <li className="nav-item">
          <button onClick={this.props.CheatFollowers} className="nav-link btn">
             Cheat Followers
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
            <a className="navbar-brand" href="#">BardHub</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Features</a>
                </li>
                <li className="nav-item">
                  <Link className="btn" to="/newsfeed">NewsFeed</Link>
                </li>
                {isAuthenticated ? authenticated : guest}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
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
