import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/login";
import { resetErrors } from "../../actions/messages";
import { Link, Redirect} from 'react-router-dom';

export class CreateAccount extends Component {
  state = {
  	email: "",
    dispname: "",
    password: "",
    // confpassword: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    resetErrors: PropTypes.func.isRequired,
    errors: PropTypes.object,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.resetErrors();
  }

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
    const { errors } = this.props;
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
              required
            />
          </div>
          {(errors && errors.username) ? <div>{errors.username}</div>:<div></div>}
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
  errors: state.errors.msg,
  isAuthenticated: state.login.isAuthenticated,
});

export default connect(mapStateToProps, { register, resetErrors })(CreateAccount);