import Logo from '../../assets/images/Logo2.png';
import HomeIcon from '../../assets/images/Home.png';
import LoginIcon from '../../assets/images/login.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className='navbar-home'>
        <a href="/">
          <img src={Logo} alt="Back to Home" loading="lazy" className="logo-img" />
        </a>
      </div>
      <div className="icon-container" >
        <a href="/">
          <img src={HomeIcon} alt="Home" />
        </a>
        <a href="/admin/login" >
          <img src={LoginIcon} alt="Login" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;