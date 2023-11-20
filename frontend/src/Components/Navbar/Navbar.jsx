import Logo from '../../assets/images/Logo2.png';
import HomeIcon from '../../assets/images/Home.png';
import LoginIcon from '../../assets/images/login.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar-container" aria-label="Navbar">
      <div className='navbar-home'>
        <a href="/">
          <img src={Logo} alt="Back to Home" loading="lazy" className="logo-img" aria-label="logotype" />
        </a>
      </div>
      <div className="icon-container" >
        <a href="/">
          <img src={HomeIcon} alt="Home" aria-label="home-icon" />
        </a>
        <a href="/admin/login" >
          <img src={LoginIcon} alt="Login" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;