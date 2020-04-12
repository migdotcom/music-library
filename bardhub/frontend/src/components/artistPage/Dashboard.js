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
  

// Return button Component 
function BackButton(props) 
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
        this.ifBackButtonClicked = this.ifBackButtonClicked.bind(this); 
    } 
  
    parentFunction=(data_from_child)=>{
        this.setState({searchedUser : data_from_child})
        console.log(this.state.searchedUser);
            }
            
    ifBackButtonClicked() 
    { 
        this.setState({searchedUser : null}); 
    } 
  
    render(){ 
  
        return( 
  
            <div> 
  
                <Message searchedUser = {this.state.searchedUser}/> 
                  
                { 
                    (this.state.searchedUser)?( 
                    [
                    <ArtistPage searchedUser = {this.state.searchedUser}/>
                    ,<BackButton clickFunc = {this.ifBackButtonClicked}/> 
                    ]
                    //currently i can't render both of them at once, only the button shows
                    ) : ( 
                    <UserSearch functionCallFromParent={this.parentFunction.bind(this)}/>
                    
                    ) 
                } 
  
            </div> 
                  
            ); 
    } 
} 
export default Homepage