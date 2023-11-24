import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";

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