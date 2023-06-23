import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Layout() {
    return (
        <>
            <Header/>
            <Banner/>
            <Outlet/>

            <Footer/>
        </>
    )
}
export  default  Layout;