import '../assets/css/header.css'

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
                                <li><a href="/"><span>Home</span></a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;