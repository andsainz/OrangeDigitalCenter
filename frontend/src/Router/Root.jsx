import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";

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
