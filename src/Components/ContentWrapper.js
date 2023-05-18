import SoundTrack from "./SoundTrack";
import AddSoundTrack from "./AddSoundTrack";
import { useEffect, useState } from "react";
import ChooseTrackPopup from "./ChooseTrackPopup";
import SaveCollectionPop from "./SaveCollectionPop";
function ContentWrapper(props){
  const [popVisible , setPopVisible] = useState(false);
  const [currentTracks,setCurrentTracks] = useState([]);
  const [saveCollectionPop,setSaveCollectionPop] = useState(false);
  
  useEffect(()=>{
    getTracks();
  } , []);
  function getTracks(){
    fetch("http://localhost:9000/currentTracks")
    .then(res=> res.json())
    .then(data => setCurrentTracks(data));
  }


  return (
    <>
      <div className='content-wrapper'>
        <AddSoundTrack closePop= {setPopVisible}/>
        {currentTracks.map((v ,i)=>{
          return <SoundTrack key={v.id} details={v} getData ={getTracks} />
        })}
        
      </div>
      <button className="save-collection-button" onClick={()=>setSaveCollectionPop(true)}>Save Collection</button>
      {popVisible && <ChooseTrackPopup closePop= {setPopVisible} getData={getTracks}/>}
      
      {saveCollectionPop && <SaveCollectionPop closePop= {setSaveCollectionPop} data={currentTracks}/>}
    </>
  );
}
export default ContentWrapper;