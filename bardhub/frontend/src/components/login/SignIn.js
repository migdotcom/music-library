import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/login";
import { resetErrors } from "../../actions/messages";
import { Link, Redirect} from 'react-router-dom';

export class SignIn extends Component {
  componentDidMount() {
    this.props.resetErrors();
  }
  
  state = {
  	email: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    resetErrors: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.object
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login({email, password});
  };

  render() {
    console.log(this.props.isAuthenticated)
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { email, password } = this.state;
    const { errors } = this.props
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Sign In</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
              required
            />
          </div>
          {(errors && errors.email) ? <div>{errors.email}</div>:<div></div>}
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
              required
            />
          </div>
          {(errors && errors.password) ? <div>{errors.password}</div>:<div></div>}
          {(errors && errors.non_field_errors) ? <div>{errors.non_field_errors}</div>:<div></div>}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
          <p>
              Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  errors: state.errors.msg
});

export default connect(mapStateToProps, { login, resetErrors })(SignIn);