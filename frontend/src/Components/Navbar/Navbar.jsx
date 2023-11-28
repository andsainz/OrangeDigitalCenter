import Logo from '../../assets/logo/Logo2.png';
import ArrowHome from '../../assets/icons/user_home_icon.svg';
import HomeIcon from '../../assets/icons/home_icon.svg';
import LoginIcon from '../../assets/icons/login_icon.svg';
import LogoutIcon from '../../assets/icons/logout_icon.svg';
import GoogleTranslate from '../translate/GoogleTranslate'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = 'http://localhost:5173/';
  };

  const loginLink = isLoggedIn ? '/' : '/login';
  const homeLink = isLoggedIn ? '/admin/home' : '/';
  return (
    <nav className="navbar-container" aria-label="Navbar">
      <div className='navbar-home'>
        <Link to={homeLink}>
          <img src={Logo} alt="Left logotype" loading="lazy" className="logo-img" aria-label="logotype" />
        </Link>
      </div>
      <div className="icon-container" >
        <Link to='/'>
          <img src={ArrowHome} alt="Back to Home" loading="lazy" className="icon-img" aria-label="arrow-icon" />
        </Link>
        <Link to={homeLink}>
          <img src={HomeIcon} alt="Home" aria-label="home-icon" className="icon-img"/>
        </Link>
        <Link to={loginLink}>
          {isLoggedIn ? (
            <img src={LogoutIcon} alt="Logout" aria-label="logout-icon"  className="icon-img" onClick={handleLogout} />
          ) : (
            <img src={LoginIcon} alt="Login" aria-label="login-icon" className="icon-img" />
          )}
        </Link>
        <GoogleTranslate />
      </div>
    </nav>
  );
};

export default Navbar;