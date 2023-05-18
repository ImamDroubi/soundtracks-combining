import Logo from "../Components/Logo";
import SideBar from "../Components/SideBar";
import ContentHeader from '../Components/ContenetHeader';
import CollectionsWrapper from "../Components/CollectionsWrapper";
function Collections() {
  
  return (
    <>
    <div className="container">
      <Logo />
      <SideBar selected = "Collections"/>
      <div className='content-container'>
        <ContentHeader title="Select From Your Collection"/>
        <CollectionsWrapper />
      </div>
    </div>
    </>
    
  );
}

export default Collections;
