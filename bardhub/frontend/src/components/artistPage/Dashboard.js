import React, { Fragment, Component } from "react";
import ArtistPage from "./ArtistPage";
import UserSearch from "./UserSearch"; 
// Message Component 
function Message(props) 
{ 
    if (props.searchedUser) 
        return <h1>{props.searchedUser}</h1>; 
    else
        return <h1>Please Search for User</h1>; 
} 
  
// Search button Component 
function Login(props) 
{ 
   return( 
           <button onClick = {props.clickFunc}> 
               Search 
           </button> 
       ); 
} 
  
// Return button Component 
function Logout(props) 
{ 
    return( 
           <button onClick = {props.clickFunc}> 
               Return 
           </button> 
       ); 
} 

class Homepage extends React.Component{ 
  
    constructor(props) 
    { 
        super(props); 
  
        this.state = {searchedUser : null}; 
  
        this.ifLoginClicked = this.ifLoginClicked.bind(this); 
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this); 
    } 
  
    ifLoginClicked() 
    { 
        this.setState({searchedUser : "apogii"}); 
    } 
  
    ifLogoutClicked() 
    { 
        this.setState({searchedUser : "null"}); 
    } 
  
    render(){ 
  
        return( 
  
            <div> 
  
                <Message searchedUser = {this.state.searchedUser}/> 
                  
                { 
                    (this.state.searchedUser)?( 
                    <ArtistPage searchedUser = {this.state.searchedUser} /> ,
                    //<Logout clickFunc = {this.ifLogoutClicked} /> 
                    <UserSearch/>
                    ) : ( 
                    <Login clickFunc = {this.ifLoginClicked} />
                    ) 
                } 
  
            </div> 
                  
            ); 
    } 
} 
export default Homepage