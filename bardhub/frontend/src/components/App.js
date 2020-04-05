import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./ArtistPage/Dashboard";

import NewAlbum_Dashboard from "./newAlbum/NewAlbum_Dashboard";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
          <div className="container">
            <NewAlbum_Dashboard />
          </div>
        </Fragment>
      </Provider>
	  
    );
  }
}
ReactDom.render(<App />, document.getElementById("app"));
