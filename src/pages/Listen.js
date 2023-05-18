import ContentHeader from '../Components/ContenetHeader';
import Logo from '../Components/Logo';
import SideBar from '../Components/SideBar';
import ContentWrapper from '../Components/ContentWrapper';
function Listen() {
  return (
    <>
    <div className='container'>
    <Logo />
    <SideBar selected = "Listen"/>
    <div className='content-container'>
      <ContentHeader title="Add From Your Tracks"/>
      <ContentWrapper />
    </div>
    </div>
    </>
    
  );
}

export default Listen;
