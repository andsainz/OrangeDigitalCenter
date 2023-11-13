
import React from 'react';
import Logo from '../../assets/images/Logo2.png';
import HomeIcon from '../../assets/images/Home.png'; 
import LoginIcon from '../../assets/images/login.png'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-container">
      <div className="navbar-brand">
        <a className="navbar-brand" href="/">
          <img src={Logo} width="230" height="50" alt="Back to Home" loading="lazy" />
        </a>
        <h1 className="title" style={{ color: 'white' }}></h1>
      </div>
      <div className="icon-container" >
        <a href="/home" className="nav-link">
          <img src={HomeIcon} width="30" height="30" alt="Home" />
        </a>
        <a href="/login" className="nav-link" >
          <img src={LoginIcon} width="30" height="30" alt="Login" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;