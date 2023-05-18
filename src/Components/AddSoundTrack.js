function AddSoundTrack(props){
  return (
    <>
      <div className="add-sound-track">
        <button onClick={() => {props.closePop(true)}}></button> 
        <div className="horizontal" onClick={() => {props.closePop(true)}}></div>
        <div className="vertical" onClick={() => {props.closePop(true)}}></div>
      </div>
    </>
  );
}

export default AddSoundTrack;