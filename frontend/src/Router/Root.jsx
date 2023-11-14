import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Root() {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        );
    }

export default Root;
