import Logo from '../../assets/images/Logo2.png';
import Facebook from '../../assets//images/facebookicon.png';
import Twitter from '../../assets/images/twittericon.png';
import Linkedin from '../../assets/images/linkedinicon.png';
import Instagram from '../../assets/images/instaicon.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer-text">
        <p>© Orange 2023</p>
        <Link to="/privacypolicy" className="privacy-policy-link"><p>Política de privacidad</p></Link>
        <p>Política de cookies</p>
        <p>Aviso legal</p>
      </div>
      <div className="footer-icons">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src={Facebook} alt="Icon1" aria-label="facebook" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src={Twitter} alt="Icon2" aria-label="twitter" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="Icon3" aria-label="linkedin" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Icon4" aria-label="instagram" />
      </a>
      </div>
    </footer>
  );
};
export default Footer;