import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from "./layout/Header";
import Dashboard from "./ArtistPage/Dashboard";
import AlbumPage from "./ArtistPage/AlbumPage";
import UserAlbumPage from "./profile/UserAlbumPage";

import NewAlbum_Dashboard from "./newAlbum/NewAlbum_Dashboard";
import CreateAlbum from "./newAlbum/CreateAlbum";

import EditAlbum from "./newAlbum/EditAlbum";
import UserAlbums from "./profile/UserAlbums";
import CreateTrack from "./profile/CreateTrack";

import Reports from "./Reports/Reports"

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
        
  render() {     
  return (  
  <Provider store={store}>     
  <Router>       
  <Fragment>       
  <Header />      
  <div className="container">       
  <Switch>         
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/makealbum" component={CreateAlbum} />
      <PrivateRoute exact path="/albums" component={UserAlbums} />
      <PrivateRoute path="/editalbum/:id" component={EditAlbum} />
      <PrivateRoute path="/useralbum/:id" component={UserAlbumPage} />
      <PrivateRoute path="/addtrack/:id" component={CreateTrack} />
      <Route path="/album/:id" component={AlbumPage} />
      <Route exact path="/register" component={CreateAccount} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/newsfeed" component={NewsFeed_Dashboard} />
      <Route exact path="/reports" component={Reports} />
  </Switch>    
  </div>   
  </Fragment>
  </Router>
  </Provider>);   
  }
}

ReactDom.render(<App />, document.getElementById("app"));
