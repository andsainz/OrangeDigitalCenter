import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from './Components/home/Home.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import './assets/fonts/fonts.css';
import Discover from "./pages/Odc/Odc.jsx";
import React from "react";

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
