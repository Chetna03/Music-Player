import React from 'react'
import '../style/displaybox.css';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import AlbumIcon from '@material-ui/icons/Album';
const lyricsFinder = require('lyrics-finder');

function DisplayBox(props) {

    let imgElement;
    if(props.albumArtUrl){
        imgElement = <img className="album-img" src={props.albumArtUrl}/>
    }
    else{
        imgElement = <img className="album-img" src="https://i.pinimg.com/originals/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec.jpg"/>
    }
    // let song = props.songName;
    // let artist = "halsey";
    // var lyrics = "";

    // async function searchLyrics(artist,song) {
    //     return await lyricsFinder(artist,song) || "Not Found!";
    // }

    // searchLyrics(artist,song);

    // let song = props.songName;
    // let artist = "halsey";
    // var lyrics = "";

    // (async function(artist,song) {
    //     lyrics = await lyricsFinder(artist,song) || "Not Found!";
    // })

    //   let final = "1";

    //   if(props.videoIds)
    //   {final = props.videoIds.map((id,index) => (<li key={`list${index}`}><a id={index} key={`play${index}`} onClick={props.play}>play </a><a key={`pause${index}`} id={index} onClick={props.pause}>pause </a><br/><a>{props.songTitle[index]}</a><YouTube opts={opts} id={index} onReady={props.storeScopes} videoId={id}/>
    //   </li>));}

    if(props.className == "search" && props.finalIds.length > 0){
        return (
            <div className="display-box" id={props.className}>
                <ul className="search-list">
                {props.finalIds}
                </ul>
            </div>        
        )
    }
    else if(props.className == "player"){
        return (
            <div className="display-box" id={props.className}>
                <div className="playing-text">{props.currentSong ? "Now Playing" : "My Music Player"}</div>
                {/* <div className="playing-text">Now Playing</div> */}
                {imgElement}
                {/* <div>{props.currentSong}</div> */}
                <div className="song-text">{props.currentSong}</div>

            </div>
        )
    }
    else{
        return (
            <div className="display-box" id={props.className}>
                <pre><span id="innerLyrics-box">{props.lyrics}</span></pre>
            </div>
        )
    }

    
}

export default DisplayBox
