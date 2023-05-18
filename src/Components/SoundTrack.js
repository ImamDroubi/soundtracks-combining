import { useEffect, useState } from "react";
  /*
  To Do: 
  1 - Reset Track Button 
  2 - Mute Button 
  3 - Remove Track (X) Button
  */ 


function SoundTrack(props){

  useEffect(()=>{
    
  }, []);
  function handleMute(){
    let audio = document.getElementById("audio" + props.details.id);
    audio.muted = !audio.muted
  }
  function handlePlay(){
    let audio = document.getElementById("audio" + props.details.id);
    let range = document.getElementById("rangeInput" + props.details.id);
    let percentage = document.getElementById("percentageVolume" + props.details.id);
    audio.volume = props.details.volume/100.0 ;
    range.value = props.details.volume;
    percentage.innerText = +props.details.volume;

    audio.play();  
  }
  function handlePause(){
    let audio = document.getElementById("audio" + props.details.id);
    audio.pause();
  }
  function handleReset(){
    let audio = document.getElementById("audio" + props.details.id);
    audio.currentTime = 0;
  }
  function handleSliderchange(){
    let range = document.getElementById("rangeInput" + props.details.id);
    let percentage = document.getElementById("percentageVolume" + props.details.id);
    let audio = document.getElementById("audio" + props.details.id);
    percentage.textContent = range.value;
        audio.volume = range.value/100.0;
  }
  function handleDelete(){
    fetch("http://localhost:9000/currentTracks/" + props.details.id , {
      method: "DELETE",
    }).then((res)=> res.json())
    .then((data)=>{
      props.getData();
    })
    
  }
  return(
    <>
      <div className="sound-track">
        <h2>{props.details.name.slice(0 ,25) + "..."}</h2>
        <p><span id={"percentageVolume" + props.details.id}>50</span>%</p>
        <input type="range" min="0" max = "100" id={"rangeInput" + props.details.id}  onClick={()=>handleSliderchange(props)}></input> 
        <div className="track-controls">
          <button id={"play" + props.details.id} onClick={()=>handlePlay()}>play</button>
          <button id={"stop" + props.details.id} onClick={()=>handlePause()}>stop</button>
          <button id={"reset" + props.details.id} onClick={()=>handleReset()}>reset</button>
          <button id={"mute" + props.details.id} onClick={()=>handleMute()}>mute</button>
          <button id={"delete" + props.details.id} onClick={()=>handleDelete()} >remove</button>
        </div>
        <audio id={"audio" + props.details.id} loop >
          <source src={props.details.link} type="audio/mpeg"></source>
        </audio>
        
      </div> 
      
    </>
  );
}
export default SoundTrack;