import { useNavigate } from "react-router-dom";

function UploadTrackPopup(props){
  let navigate = useNavigate();
  function handleSubmit(){
    let name = document.getElementById("upload-track-name").value;
    let link = document.getElementById("upload-track-link").value;
    let volume = document.getElementById("upload-track-volume").value;
    let obj= {
      "name" : name,
      "link" : link,
      "volume" : volume
    }
    fetch("http://localhost:9000/tracks", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(
      navigate('/AddSound'),
      props.getData(),
      props.closePop(false)
    );
    props.getData();
  }
  return (
    <>
    <div className="upload-track-popup">
        <button className="close-upload-tracks-popup" onClick={()=> {props.closePop(false)}}>X</button>
        <div className="upload-tracks-container">
          <div className="upload-track-input">
            <label>Name:</label>
            <input id="upload-track-name" type="text"/>
          </div>
          <div className="upload-track-input">
            <label>Link:</label>
            <input id="upload-track-link" type="text"/>
          </div>
          <div className="upload-track-input">
            <label>Volume:</label>
            <input id="upload-track-volume" type="number" />
          </div>
        </div>
        <button className="upload-tracks-popup-submit" onClick={()=>handleSubmit()}>Upload</button>
      </div>
    </>
  );
}
export default UploadTrackPopup;