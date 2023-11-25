import Logo from '../../assets/images/Logo2.png';
import ArrowHome from '../../assets/images/arrowHome.png';
import HomeIcon from '../../assets/images/Home.png';
import LoginIcon from '../../assets/images/login.png';
import LogoutIcon from '../../assets/images/iconlogout.png';
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

  const loginLink = isLoggedIn ? '/home' : '/login';
  return (
    <nav className="navbar-container" aria-label="Navbar">
      <div className='navbar-home'>
        <a href="/">
          <img src={Logo} alt="Back to Home" loading="lazy" className="logo-img" aria-label="logotype" />
        </a>
      </div>
      <div className="icon-container" >
        <a href="/">
          <img src={ArrowHome} alt="Back to Home" loading="lazy" className="logo-img" aria-label="arrow-icon" />
        </a>
        <a href="/">
          <img src={HomeIcon} alt="Home" aria-label="home-icon" />
        </a>
        <Link to={loginLink}>
          {isLoggedIn ? (
            <img src={LogoutIcon} alt="Logout" aria-label="logout-icon" onClick={handleLogout} />
          ) : (
            <img src={LoginIcon} alt="Login" aria-label="login-icon" />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;