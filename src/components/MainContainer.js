import React from 'react'
import '../style/maincontainer.css';
import DisplayBox from './DisplayBox';

function MainContainer(props) {

    console.log("props.videoIds -> ",props.videoIds);
    console.log("props.finalIds -> ",props.finalIds);

    return (

        
        <div className="main-box">
            {/* searches */}
            <DisplayBox className="search" videoIds={props.videoIds} setVideoId={props.setVideoId} songTitle={props.songTitle} setSongTitle={props.setSongTitle} finalIds={props.finalIds} setFinalId={props.setFinalId} play={props.play} pause={props.pause} storeScopes={props.storeScopes}/>
            {/* player */}
            <DisplayBox className="player" albumArtUrl={props.albumArtUrl} loadPlayer={props.loadPlayer} currentSong={props.currentSong}/>
            {/* lyrics */}
            <DisplayBox className="lyrics" finalSong={props.finalSong} setFinalSong={props.setFinalSong} lyrics={props.lyrics} setLyrics={props.setLyrics}/>
        </div>
    )
}

export default MainContainer
