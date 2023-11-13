import React from 'react';
import Logo from '../../assets/images/logo2.png';
import Facebook from '../../assets//images/facebookicon.png';
import Twitter from '../../assets/images/twittericon.png';
import Linkedin from '../../assets/images/linkedinicon.png';
import Instagram from '../../assets/images/instaicon.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer-text">
        <p>© Orange 2023</p>
        <p>Política de privacidad</p>
        <p>Política de cookies</p>
        <p>Aviso legal</p>
      </div>
      <div className="footer-icons">
        <img src={Facebook} alt="Icon1" />
        <img src={Twitter} alt="Icon2" />
        <img src={Linkedin} alt="Icon3" />
        <img src={Instagram} alt="Icon4" />
      </div>
    </footer>
  );
};

export default Footer;