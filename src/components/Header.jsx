export default function Header() {
    return (
        <header>
            <div className="row">
                {/* parte sinistra con logo */}
                <div className="col-1 d-flex p-0">
                    <div className="dc-logo-container">
                        <img className="dc-logo" src="./img/dc-logo.png" alt="" />
                    </div>
                </div>

                {/* parte destra con nav bar */}
                <div className="col col-nav">
                    <ul className="navbar">
                        <li>
                            <a href="">CHARACTERS</a>
                        </li>
                        <li>
                            <a href="">COMICS</a>
                        </li>
                        <li>
                            <a href="">MOVIES</a>
                        </li>
                        <li>
                            <a href="">TV</a>
                        </li>
                        <li>
                            <a href="">GAMES</a>
                        </li>
                        <li>
                            <a href="">COLLECTIBLES</a>
                        </li>
                        <li>
                            <a href="">VIDEOS</a>ì
                        </li>
                        <li>
                            <a href="">FANS</a>
                        </li>
                        <li>
                            <a href="">NEWS</a>
                        </li>
                        <li>
                            <a href="">SHOP</a>
                        </li>
                    </ul>

                </div>

            </div >

        </header >
    )
}