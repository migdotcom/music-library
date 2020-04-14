import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/login";
import { Link, Redirect} from 'react-router-dom';

export class CreateAccount extends Component {
  state = {
  	email: "",
    dispname: "",
    password: "",
    // confpassword: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { email, dispname, password } = this.state;
    this.props.register({email, dispname, password});
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { email, dispname, password } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Create Account</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Display Name</label>
            <input
              className="form-control"
              type="text"
              name="dispname"
              onChange={this.onChange}
              value={dispname}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p>
              <Link to="/login">Back to Login</Link>
          </p>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});

export default connect(mapStateToProps, { register })(CreateAccount);