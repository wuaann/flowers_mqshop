import '../assets/css/header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar">
                        <div className="nav-left">
                            <div className={'logo'}>
                                <a className="narrow" href="">Narrow</a>
                            </div>
                        </div>
                        <div className={'nav-right'}>
                            <ul className="nav text-right">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Services</Link></li>
                                <li><Link to="/">Products</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;