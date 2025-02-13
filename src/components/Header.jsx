export default function Header() {
    return (

        <header className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col d-flex">
                        <div className="box-logo">
                            <img src="./img/dc-logo.png" alt="DC Logo" className="dc-logo" />
                        </div>
                    </div>
                    <div className="col">
                        <nav className="navbar navbar-expand-lg p-0">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CHARACTERS</a>
                                </li>
                                <li className="nav-items">
                                    <a className="nav-link act" href="#">COMICS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">MOVIES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">TV</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">GAMES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">COLLECTIBLES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">VIDEOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FANS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">NEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SHOP</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
