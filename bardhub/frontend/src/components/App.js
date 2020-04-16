import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import ProfileDashboard from "./profile/ProfileDashboard";
import NewAlbum_Dashboard from "./newAlbum/NewAlbum_Dashboard";
// import ProfileDashboard from "./profile/ProfileDashboard";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">{/* <Dashboard /> */}</div>
          <div className="container">
            <ProfileDashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}
ReactDom.render(<App />, document.getElementById("app"));
