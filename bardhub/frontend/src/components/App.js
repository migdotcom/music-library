import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from "./layout/Header";
import Dashboard from "./ArtistPage/Dashboard";

import NewAlbum_Dashboard from "./newAlbum/NewAlbum_Dashboard";

import NewsFeed_Dashboard from "./NewsFeed/NewsFeed_Dashboard";


import SignIn from "./login/SignIn";
import CreateAccount from "./login/CreateAccount";
import PrivateRoute from "./login/PrivateRoute";
import {loadUser} from "../actions/login";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
     componentDidMount() {
    store.dispatch(loadUser());
  }
  routingFunction() {
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
               <PrivateRoute exact path="/" component={Dashboard} />
               <Route exact path="/register" component={CreateAccount} />
               <Route exact path="/login" component={SignIn} />
               <Route exact path="/newsfeed" component={NewsFeed_Dashboard} />
              </Switch>
            </div>
          </Fragment>
        </Router>    
  }
  /* 
  <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
          <div className="container">
            <NewAlbum_Dashboard />
          </div>
        </Fragment> */
        
  render() {     
  return (  
  <Provider store={store}>     
  <Router>       
  <Fragment>       
  <Header />      
  <div className="container">       
  <Switch>         
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/register" component={CreateAccount} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/newsfeed" component={NewsFeed_Dashboard} />
  </Switch>    
  </div>   
  </Fragment>
  </Router>
  </Provider>);   
  }
}

ReactDom.render(<App />, document.getElementById("app"));
