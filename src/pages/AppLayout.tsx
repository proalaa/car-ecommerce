import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

const Layout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer/>
        </>
    );
};

export default Layout;
