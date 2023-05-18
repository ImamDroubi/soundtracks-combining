import { Link } from "react-router-dom";

function SideBarItem(props){
  return(
    <>
    <li>
      <Link to={ props.id === "first_sidebar_item"? "/" :  "/" + props.label.replace(/\s+/g, '')} id = {props.id} className = {props.className} >
      {props.label}
      </Link>
      {/* <a href="/" id= {props.id ? props.id : ""} className = {props.className}>{props.label}</a> */}
    </li>
    </>
  )
}
export default SideBarItem;