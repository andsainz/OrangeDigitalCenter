import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Root() {
  const location = useLocation();

    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }


export default Root;