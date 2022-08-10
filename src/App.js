import { Routes, Route,useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import profile from "./images/profile.jpg";

import Toolbar from '@mui/material/Toolbar'
import "./App.css";
function App() {
  const Navigate = useNavigate();
  return (
     <>
     <nav className="navbar-expand-lg">
        <AppBar  position="fixed">
          <Toolbar className="barcolor">
         <Button  color="inherit" onClick={() => Navigate("/")}>Home</Button>
         <Button color="inherit" onClick={()=>Navigate("/About")}>About</Button>  
         <Button color="inherit" onClick={()=>Navigate("/Skill")}>Skills</Button> 
         <Button color="inherit" onClick={() => Navigate("/Projects")}>Projects</Button>
         <Button color="inherit" onClick={() => Navigate("/Contact")}>Contact</Button>
              <div className="profile">
                <h4 className="profilename">Infant Y</h4>
              <img className="image" src={profile} alt=""/>
            </div>
       </Toolbar>
        </AppBar>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </>
  );
}

export default App;

