function InventoryItemOptions(props){
  return (
    <>
      <div className="inventory-item-options"  >
        <button className="add-to-listen" onClick={()=> props.addToListen()}>Add To Listen</button>
        <button className="preview" onClick={()=> props.play()}>Preview</button>
        <button className="stop" onClick={()=> props.pause()}>Stop</button>
        <button className="delete-inventory-item" onClick={()=> props.delete()}>Delete</button>
      </div>
    </>
  );
}
export default InventoryItemOptions;