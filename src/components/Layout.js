import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import CartIcon from "../features/Home/components/CartIcon";

function Layout() {
    return (
        <>
            <Header/>
            <Banner/>
            <CartIcon/>
            <Outlet/>

            <Footer/>
        </>
    )
}
export  default  Layout;