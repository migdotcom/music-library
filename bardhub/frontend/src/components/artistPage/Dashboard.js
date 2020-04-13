import React, { Fragment, Component } from "react";
import ArtistPage from "./ArtistPage";
import UserSearch from "./UserSearch";
import SingleAlbumPage from "./SingleAlbumPage" 
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

function ConditionalView(props)
{
    var searchedUser = props.searchedUser;
    var selectedAlbum = props.selectedAlbum;
    var ifBackButtonClicked = props.ifBackButtonClicked
    if (searchedUser)
        if (!selectedAlbum)                 
            return( 
        [
            (<div key = "Album_display">
                <ArtistPage key={searchedUser} searchedUser = {searchedUser}/>
            </div> ), (
            <div key = "backbutton">
            <BackButton clickFunc = {ifBackButtonClicked}/> 
        </div>) , 
        (
            <SingleAlbumPage message = {searchedUser + "singleAlbumMessage"}/> )
            ]
            )
        else
            return(
                <BackButton clickFunc = {ifBackButtonClicked} />
        ) //AlbumPage
    else
        return (                 <BackButton clickFunc = {ifBackButtonClicked} /> )
/*         return (
        <UserSearch functionCallFromParent={this.parentFunction.bind(this)}/>
                ) */
 
/*     else 
        return( 
    <div key="search">
        <UserSearch functionCallFromParent={this.parentFunction.bind(this)}/>
    </div>
    )  */
    
}
class Homepage extends React.Component{ 
  
    constructor(props) 
    { 
        super(props); 
  
        this.state = {searchedUser : null, selectedAlbum: null}; 
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
    //keys added in an attempt to force remounting of components to fix bug
        return( 
                <div>
                    <Message searchedUser = {this.state.searchedUser}/> 
                    <UserSearch functionCallFromParent={this.parentFunction.bind(this)}/>
                    <ConditionalView searchedUser = {this.state.searchedUser} selectedAlbum = {this.state.selectedAlbum} ifBackButtonClicked = {this.ifBackButtonClicked}/>
                </div>
            ); 
    } 
} 
export default Homepage