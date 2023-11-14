import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from './pages/home/Home.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import Discover from "./pages/Odc/Odc.jsx";
import './assets/fonts/fonts.css';

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <Discover />
    <Footer />
    </>
  );
}

export default App
