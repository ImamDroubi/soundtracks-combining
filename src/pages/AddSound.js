import Logo from "../Components/Logo";
import SideBar from "../Components/SideBar";
import ContentHeader from '../Components/ContenetHeader';
import TracksInventory from '../Components/TracksInventory';
function AddSound() {
  
  return (
    <>
    <div className="container">
      <Logo />
      <SideBar selected = "Add Sound"/>
      <div className='content-container'>
        <ContentHeader title="Upload Your Own Tracks"/>
        <TracksInventory/>
      </div>
    </div>
    </>
    
  );
}

export default AddSound;
