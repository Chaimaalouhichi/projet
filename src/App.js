


import NavBar from "./NavBar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Conges from './Conges/Conges';
import  Dashbord from './Dashbord/Dashbord';

function App() {
 

  return (
   
    <BrowserRouter>
     <NavBar />
     <SideBar />
    
      <Routes>
      <Route path="/Conges" element={<Conges/>}/>
      <Route path="/Dashbord" element={<Dashbord/>}/>
     
       
       
       
       
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
