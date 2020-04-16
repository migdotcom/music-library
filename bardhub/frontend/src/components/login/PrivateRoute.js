import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (login.isLoading) {
        console.log("loading...");
        return <h2>Loading...</h2>;
      } else if (!login.isAuthenticated) {
        console.log("No auth");
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(PrivateRoute);