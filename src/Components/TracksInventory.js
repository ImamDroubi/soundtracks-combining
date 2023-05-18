import { useEffect, useState } from "react";
import TracksInventoryItem from "./TracksInventoryItem";
import UploadTrackPopup from "./UploadTrackPopup";
function TracksInventory(){
  const [tracks , setTracks] = useState([]);
  const [popVisible , setPopVisible] = useState(false);
  useEffect(()=>{
    getTracks();
  },[]);
  function getTracks(){
    fetch("http://localhost:9000/tracks")
    .then((res)=> res.json())
    .then((data)=>{
      setTracks(data);
    })
  }
  return(
    <>
      <div className="tracks-inventory-container">
        <ul className="tracks-inventory">
          {tracks&& 
            tracks.map((ob, ind)=>{
              return <TracksInventoryItem key={"tracks-inventory-item" + ind} details={ob}  getData ={getTracks}/>
            })
          }
        </ul>
        <button id="upload-track" onClick={()=> setPopVisible(true)}>Upload</button>
        {popVisible && <UploadTrackPopup closePop= {setPopVisible} getData={getTracks}/>}
      </div>
    </>
  );
}
export default TracksInventory;