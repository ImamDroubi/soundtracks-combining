import { useNavigate } from "react-router-dom";

function SaveCollectionPop(props){
  let navigate = useNavigate();
  function handleSubmit(){
    let name = document.getElementById("save-collection-name").value;
    
    let obj = {
      "name" : name,
      "tracks" : []
    }
    props.data.map((el,ind)=>{
      let track =el;
      el.id = ind+1;
      let volume = document.getElementById("rangeInput" + el.id).value;
      el.volume = volume;
      obj.tracks.push(track);
    })
    fetch("http://localhost:9000/collections", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(
      navigate('/collections'),
      props.closePop(false)
    );
  }
  return (
    <>
    <div className="save-collection-popup">
        <button className="close-save-collection-popup" onClick={()=> {props.closePop(false)}}>X</button>
        <div className="save-collection-container">
          <div className="save-collection-input">
            <label>Collection Name:</label>
            <input id="save-collection-name" type="text"/>
          </div>
        </div>
        <button className="save-collection-popup-submit" onClick={()=>handleSubmit()}>Save</button>
      </div>
    </>
  );
}
export default SaveCollectionPop;