// const navLinks = [
//     { id: 1, text: "CHARACTERS", url: "#", current: false },
//     { id: 2, text: "COMICS", url: "#", current: false },
//     { id: 3, text: "MOVIES", url: "#", current: true },
//     { id: 4, text: "TV", url: "#", current: false },
//     { id: 5, text: "GAMES", url: "#", current: false },
//     { id: 6, text: "COLLECTIBLES", url: "#", current: true },
//     { id: 7, text: "VIDEOS", url: "#", current: false },
//     { id: 8, text: "FANS", url: "#", current: true },
//     { id: 9, text: "NEWS", url: "#", current: false },
//     { id: 10, text: "SHOP", url: "#", current: true }
// ];

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-md p-0">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {props.navLinks.map(link => (
                        <li key={link.id} className="nav-item">
                            <a className="nav-link" href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

