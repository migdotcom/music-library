import React, { Fragment, Component } from "react";
import ArtistPage from "./ArtistPage";
import UserSearch from "./UserSearch";
import SingleAlbumPage from "./SingleAlbumPage" 
import {addTrack} from "../../actions/tracks"
import {getAlbumsFromPastMonth} from "../../actions/albums"
// Message Component 
function Message(props) 
{
    console.log(addTrack({
    Name: "Test",
    URL: "test.html",
    Licensing_rights: "teswt",
    Notes: "test",
    Artist: 1,
    Album: 1,
    Tag: "1",
    Playlist: []
}) );
    console.log(getAlbumsFromPastMonth() );
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
            <SingleAlbumPage message = {props.messageToParent + ": singleAlbumMessage"}/> )
            ]
            )
        else
            return(
                <BackButton clickFunc = {ifBackButtonClicked} />
        ) //AlbumPage
    else
        return (                 <BackButton clickFunc = {ifBackButtonClicked} /> )
/*         return (
        <UserSearch messageToParent={this.updateSearchedUserFromChild.bind(this)}/>
                ) */
 
/*     else 
        return( 
    <div key="search">
        <UserSearch messageToParent={this.updateSearchedUserFromChild.bind(this)}/>
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
  
    updateSearchedUserFromChild=(data_from_child)=>{
        this.setState({searchedUser : data_from_child})
        console.log(this.state.searchedUser);
            }
    updateSelectedAlbumFromChild=(data_from_child)=>{
        this.setState({selectedAlbum : data_from_child})
        console.log(this.state.selectedAlbum);
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
                    <UserSearch messageToParent={this.updateSearchedUserFromChild.bind(this)}/>
                    <ConditionalView messageToParent={() => this.updateSelectedAlbumFromChild} searchedUser = {this.state.searchedUser} selectedAlbum = {this.state.selectedAlbum} ifBackButtonClicked = {this.ifBackButtonClicked}/>
                </div>
            ); 
    } 
} 
export default Homepage