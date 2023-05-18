import {useState } from "react";
import {useNavigate } from "react-router-dom";
import InventoryItemOptions from "./InventoryItemOptions";

function TracksInventoryItem(props){
  const [showOptions,setShowOptions] = useState(false);
  const navigate = useNavigate();
  function handlePlay(){
    let audio = document.getElementById("inventory-item-audio" + props.details.id);
    audio.play();  
  }
  function handlePause(){
    let audio = document.getElementById("inventory-item-audio" + props.details.id);
    audio.pause();
  }
  function handleDelete(){
    fetch("http://localhost:9000/tracks/" + props.details.id , {
      method: "DELETE",
    }).then((res)=> res.json())
    .then((data)=>{
      props.getData();
    })
  }
  function handleAddToListen(){
    fetch("http://localhost:9000/currentTracks", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name" : props.details.name,
        "link" : props.details.link,
        "volume" : 50
      })
    })
    .then(res => res.json())
    .then(
      navigate('/listen')
    );
  }
  return(
    <>
      <li id={"inventory-item" + props.details.id} >
        <p onClick={() =>setShowOptions(!showOptions)}>{props.details.name}</p>
        <audio id={"inventory-item-audio" + props.details.id} loop >
          <source src={props.details.link} type="audio/mpeg" ></source>
        </audio>
        {showOptions && 
        <InventoryItemOptions details={props.details}
        addToListen={handleAddToListen}
        play={handlePlay}
        pause={handlePause}
        delete={handleDelete} 
        getData={props.getData} />}
      </li>
      
    </>
  );
}
export default TracksInventoryItem;
