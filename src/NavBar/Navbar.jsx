import React from 'react';
import './NavBar.css'
import Icon from 'awesome-react-icons';
import logoImage from '../assets/logo.png';
import UserImage from '../assets/user.png';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="logo">
        <img src={logoImage} alt="Logo" />
        </div>
        <div className='fa-bell' style={{marginLeft:'51rem'}}>
          <Icon name="bell" />
        </div>
        <div className="logo-container">
        <img src={UserImage} alt="Logo" />
        </div>
      </div>
    </nav>
  ); 
}

export default Navbar;
