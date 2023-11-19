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
          <img src={Logo} alt="Back to Home" loading="lazy" className="logo-img" />
        </a>
        <h1 className="title" style={{ color: 'white' }}></h1>
      </div>
      <div className="icon-container" >
        <a href="/" className="nav-link">
          <img src={HomeIcon} alt="Home" className="nav-icon" />
        </a>
        <a href="/login" className="nav-link" >
          <img src={LoginIcon} alt="Login" className="nav-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
