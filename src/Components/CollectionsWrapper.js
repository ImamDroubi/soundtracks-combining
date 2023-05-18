import { useEffect, useState } from "react";
import Collection from "./Collection";
function CollectionsWrapper(){
  const [collectionsList,setCollectionsList] = useState([]);
  useEffect(()=>{
    getData();
  } ,[]);
  function getData(){
    fetch("http://localhost:9000/collections")
    .then((res)=> res.json())
    .then(data => setCollectionsList(data));
  }
  return(
    <>
      <div className='collections-wrapper'>
        {
          collectionsList.map((el)=>{
            return <Collection key ={"collection" + el.id} details = {el} tracks={el.tracks} getData ={getData}/>
          })
        }
          
      </div>
    </>
  );
}
export default CollectionsWrapper;