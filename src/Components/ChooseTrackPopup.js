import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TracksInventory from "./TracksInventory";
function ChooseTrackPopup(props){
  const [tracks , setTracks] = useState([]);
  const [choosedTracks , setChoosedTracks] = useState([]);
  let navigate = useNavigate();
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
  function markChoosed(identifier){
    let tmpArray = [];
    choosedTracks.map(el=> tmpArray.push(el));
    let ind = tmpArray.indexOf(identifier);
    if(ind > -1){
      tmpArray.splice(ind , 1);
      document.getElementById("trk" + identifier).classList.remove("track-choosed");
    }else{
      tmpArray.push(identifier);
      document.getElementById("trk" + identifier).classList.add("track-choosed");
    }
    setChoosedTracks(tmpArray);
    
    
  }
  function handleSubmit(){
    tracks.map((trk)=>{
      if(choosedTracks.includes(trk.id)){
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
          props.getData(),
          props.closePop(false)
        );
        props.getData();
      }
      
    })
  }
  return (
    <>
      <div className="choose-track-popup">
        <button className="close-choose-tracks-popup" onClick={()=> {props.closePop(false)}}>X</button>
        <div className="popup-tracks-container">
          {tracks &&
              tracks.map((el)=>{
                return <p id={"trk" + el.id} onClick={()=>markChoosed(el.id)} key={el.id} className="popup-track-item">{el.name.slice(0,80)}</p>
              })
            }
        </div>
        <button className="choose-tracks-popup-submit" onClick={handleSubmit}>Add To Listen</button>
      </div>
    </>
  );
}
export default ChooseTrackPopup;

{/* <form className="popup-tracks-container" action="https://www.hashemian.com/tools/form-post-tester.php/imamimam" id="tracksListForm">
          {tracks &&
            tracks.map((el)=>{
              return <div className="popup-track-item">
                        <input type="checkbox" id={"track" + el.id} name={"track" + el.id} ></input>
                        <label  for={"track" + el.id}>{el.name.slice(0,80)}</label>
                      </div>
            })
          }
        </form> */}