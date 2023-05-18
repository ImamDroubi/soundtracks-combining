import { useState } from "react";
import SideBarItem from "./SideBarItem";
function SideBar(props){
  const [items] = useState(["Menu" , "Home" , "Listen" , "Add Sound" , "Collections"]);
  return(
    <>
    <ul className="sidebar">
      {items.map((v ,i) => (
        <SideBarItem key={i} label={v} id = {i === 0 ? "first_sidebar_item" : i === items.length-1 ? "last_sidebar_item" : "" } className= {v === props.selected ? "selected-sidebar" : ""} />
      ))}
    </ul>
    </>
  )
}
export default SideBar;