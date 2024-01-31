import React from 'react';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TornadoIcon from '@mui/icons-material/Tornado';
import HandymanIcon from '@mui/icons-material/Handyman';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useNavigate } from 'react-router-dom';
import { navigate } from 'react-router-dom';
function SideBar() {
  
  const navigate = useNavigate();
  
  const handleNavigate = () => {console.log("cliquer")
    navigate("/Conges");
  
  };
 

  const handleClick = () => {

    navigate('/Dashbord');
  };
  const handleChange = () => {

    navigate('/Historique');
  };
  return (

    <div className="sidebar">
     
      <h2>CLIENT X</h2>
      <div >
        <button className="btn" onClick={handleClick} >
        <HomeIcon fontSize="40px" />
          General
        </button>
      </div>
      <div>
        <h6>Resource Humain</h6>
      </div>
      <div >
        <button className="btn" >
        <PersonOutlineIcon fontSize="40px" />
          Personnel
        </button>
      </div>
      <div>
        <button className="btn"   onClick={handleNavigate}>
        <EventAvailableIcon fontSize="40px" />
          Congé
        </button>
      </div>
      <div>
        <button className="btn" >
        <TextSnippetOutlinedIcon fontSize="40px" />
           Fiche de Paie
        </button>
      </div>
      <div>
        <h6>Gestion des chantiers</h6>
      </div>
      <div>
        <button className="btn" >
        <TornadoIcon fontSize="40px" />
          Chantier
        </button>
      </div>
      <div>
        <button className="btn">
        <HandymanIcon fontSize="40px" />
          Resource Matérielle
        </button>
      </div>
      <div>
        <button className="btn">
        <InsertDriveFileIcon fontSize="40px" />
          Ressource Financière
        </button>
      </div>
      <div>
        <h6>Gestion Financiers</h6>
      </div>
      <div>
        <button className="btn">
        <PersonOutlineIcon fontSize="40px" />
          Gestion des Facture
        </button>
      </div>
      <div>
        <button className="btn">
        <EventAvailableIcon fontSize="40px" />
          Gestion des devis
        </button>
      </div>
    </div>
  );
}

export default SideBar;
