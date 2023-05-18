import {useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import InventoryItemOptions from "./InventoryItemOptions";
function Collection(props){
  const [showOptions,setShowOptions] = useState(false);
  let navigate = useNavigate();
  function handlePlay(){
    props.details.tracks.map((e)=>{
      let audio = document.getElementById("collection" + props.details.id + "sound-track" + e.id);
      audio.volume = e.volume/100;
      audio.play();
    });
  }
  function handlePause(){
    props.details.tracks.map((e)=>{
      let audio = document.getElementById("collection" + props.details.id + "sound-track" + e.id);
      audio.pause();
    });
  }
  function handleDelete(){
    fetch("http://localhost:9000/collections/" + props.details.id , {
      method: "DELETE",
    }).then((res)=> res.json())
    .then((data)=>{
      props.getData();
    })
  }
  function handleAddToListen(){
    props.details.tracks.map((trk)=>{
      let obj= {
        "name" : trk.name,
        "link" : trk.link,
        "volume" : trk.volume
      }
      fetch("http://localhost:9000/currentTracks", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(
        navigate('/listen')
      );
    })
    
  }
  return(
    <>
      <div onClick={()=>{setShowOptions(!showOptions)}} className="collection">
        <h2 >{props.details.name}</h2>
        {props.details.tracks.map((e)=>{
          return <audio key={e.id} id={"collection" + props.details.id + "sound-track" + e.id}>
              <source src={e.link}></source>
            </audio>
        })}
        {showOptions && 
        <InventoryItemOptions 
        details={props.details}
        addToListen={handleAddToListen} 
        play={handlePlay} 
        pause={handlePause} 
        delete={handleDelete} 
        getData={props.getData} />}
      </div> 
    </>
  );
}
export default Collection;