import React, { useState } from 'react'
import '../style/search.css';
import YouTube from 'react-youtube';
import SearchIcon from '@material-ui/icons/Search';
// import green from "@material-ui/core/colors/green";



function SearchBar(props) {

    let song = props.song;
    console.log("song -> ",song);

    return (
        <div className="search-bar">
            <div className="search-box">
                <input type="text" className="input-box" onChange={event => props.setSongName(event.target.value)}/>
                <a className="search-button" href="#" onClick={props.searchSong}><SearchIcon fontSize="small"/></a>
            </div>    
            <div className="name-box">
                Welcome Chetna
            </div>
        </div>
    )
}

export default SearchBar
