import './App.css';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import SearchBar from './components/SearchBar';
import React, { useState,useRef } from 'react'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
// const lyricsFinder = require('lyrics-finder');
import { getLyrics } from 'genius-lyrics-api';
import { getAlbumArt } from 'genius-lyrics-api';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';




function App() {

    let [songName,setSongName] = useState("");
    let [videoIds,setVideoId] = useState([]);
    let [finalIds,setFinalId] = useState([]);
    let [currentSong,setCurrentSong] = useState("");
    let [finalSong,setFinalSong] = useState("");
    let [lyrics,setLyrics] = useState("");
    let [albumArtUrl,setAlbumArtUrl] = useState("");
    // let [songTitle,setSongTitle] = useState([]);
    var targetObj = [];
    var songTitle = [];

    let song = songName;
    let artist = "halsey";
    // let lyrics

    
    

    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

      // const opts = {
      //   height: {100%},
      //   width: 100%,
      //   playerVars: {
      //     // https://developers.google.com/youtube/player_parameters
      //     autoplay: 0,
      //   },
      // } 

    function loadPlayer(){

    }

    let play = function(event){
      
      let id = event.currentTarget.id;
      console.log("event.currentTarget.id -> ",event.currentTarget.id);
      targetObj[id].playVideo();
      setCurrentSong(targetObj[id].getVideoData().title);
      console.log("now playing ->",targetObj[id].getVideoData().title)
      // console.log("video data",targetObj[id].getVideoData());
    }

    // let getAlbumArt = function(song){

    // }

    function searchLyrics(artist,song) {
      
      const options = {
        apiKey: 'GQ0UogxOiWZFLoqIbHcSbcWZEIs00WunFog5xmmwpwYic7h4HRZ8Ih3xs-pr2NQC',
        title: song,
        artist: "",
        optimizeQuery: true
      };
      
      getLyrics(options).then((res) => {
        lyrics  = res; 
        console.log("lyrics -> ",lyrics);
        setLyrics(res);
      });

      getAlbumArt(options).then((res) => {
        albumArtUrl  = res; 
        console.log("albumArtUrl -> ",albumArtUrl);
        setAlbumArtUrl(res);
      });

    }

    // async function searchLyrics(artist,song){
    //   const title = song;
    //   const author = artist;
    //   const lyrics = await lyricsParse(title, author); 
    //   // Will return false if no lyrics found.
    //   console.log(lyrics ? lyrics : "No Lyrics Found."); 
    //   // If the lyrics are found, log them, otherwise log "No Lyrics Found."
    // }

    let pause = function(event){
      
      let id = event.currentTarget.id;
      console.log("event.currentTarget.id -> ",event.currentTarget.id);
      targetObj[id].pauseVideo();
      // console.log("video data",targetObj[id].getVideoData());
    }

    let storeScopes = function(event){
      console.log("event target",event.target);
      targetObj.push(event.target);
      console.log("videoTitile -> ",event.target.getVideoData().title);
      songTitle.push(event.target.getVideoData().title)
      // setSongTitle(songTitle);
      console.log(songTitle);
      // console.log(event);
      // setTargetObj(event.target.playVideo);
      
      // event.target.playVideo();
      // event.target.pauseVideo();
      // let id = event.target.id;
      // player0.current.play();
      // console.log(player0);
      
      // switch(id){
      //   case 0 : {
      //     console.log("inside case 0");
      //     player0.current.play();
      //     break;}
          
      //   case 1 : {
      //     player1.current.play();
      //     console.log("inside case 1");
      //     break;}
      // }
      // event.target.id.curret.play();
    }

    function searchSong(){
        let song = songName.replace(" ","%20");
        console.log("songName inside searchSong -> ",songName);
        setFinalSong(songName);
        searchLyrics(artist,songName);
        
        // console.log("lyrics -> ",lyrics);
        
        // setLyrics(searchLyrics(artist,songName));
        // console.log(song);

        // createRefs();

      fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDLUwhcyyLLFf8uhZcVIKQcrfUx9rUwj5Q&maxResults=7&q=${song}%20audio%20song?enablejsapi=1`)
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          // console.log(myJson);
          videoIds = [];
          console.log("on clearing videoIds variable -> ",videoIds);
          myJson.items.map(item => (videoIds.push(item.id.videoId)));
          // console.log(videoIds);
          console.log("videoIds");
          console.log(videoIds);
          const newVideoId = [...videoIds];
          setVideoId(newVideoId);

          // lprops.videoIds.map((id,index) => (<li key={`list${index}`}><a id={index} key={`play${index}`} onClick={props.play}>play </a><a key={`pause${index}`} id={index} onClick={props.pause}>pause </a><br/><a>{props.songTitle[index]}</a><YouTube opts={opts} id={index} onReady={props.storeScopes} videoId={id}/>
      // </li>))

          // let finalIds = videoIds.map((id,index) => ());
          // setFinalId(finalIds)


          let modifiedId = videoIds.map((id,index) => (<li key={`list${index}`}><a id={index} className="control-buttons" key={`play${index}`} onClick={play}><PlayArrowIcon/></a><a key={`pause${index}`} className="control-buttons" id={index} onClick={pause}><PauseIcon/></a><a id={index}  key={`title${index}`}>{songName} Song Link {index+1}</a><YouTube opts={opts} id={`video${index}`} onReady={storeScopes} videoId={id}/></li>));
          console.log("modifiedIds");
          console.log(modifiedId);
          setFinalId([]);
          setFinalId(modifiedId);
          console.log("finalIds -> ");
          console.log(finalIds);
          // setSongTitle(songTitle);

          // displaySearchBox();
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });
    }

    // function displaySearchBox(){

    // }



  return (
    <div className="App">
    <SearchBar song={songName} setSongName={setSongName} searchSong={searchSong}/>
    <MainContainer albumArtUrl={albumArtUrl} finalSong={finalSong} setFinalSong={setFinalSong} lyrics={lyrics} setLyrics={setLyrics} videoIds={videoIds} setVideoId={setVideoId} currentSong={currentSong} play={play} pause={pause} storeScopes={storeScopes} songTitle={songTitle} finalIds={finalIds} setFinalId={setFinalId} loadPlayer={loadPlayer}/>
    <Footer/>
    </div>
  );
}

export default App;
