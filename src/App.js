import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Listen from "./pages/Listen";
import AddSound from "./pages/AddSound";
import Collections from "./pages/Collections";
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Listen" element={<Listen />}/>
      <Route path="/AddSound" element={<AddSound />}/>
      <Route path="/Collections" element={<Collections />}/>
    </Routes>
    </>
    
  );
}

export default App;
