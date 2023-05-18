import SideBar from "../Components/SideBar";
import Logo from "../Components/Logo";
import HeadLine from "../Components/HeadLine";
import Slogan from "../Components/Slogan";
function Home() {
  return (
    <>
    <div class="container">
    <Logo />
    <SideBar selected = "Home"/>
    <div class = "bg-circle">
    <HeadLine text="Sound Mixer..."/>
    <Slogan text ="Add,Combine,Relax."/>
    </div>
    
    
    </div>
    </>
    
    
  );
}
export default Home;