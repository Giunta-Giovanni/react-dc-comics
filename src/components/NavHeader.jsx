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

export default function NavHeader(props) {
    return (
        <nav className="navbar navbar-expand-lg p-0">
            <ul className="navbar-nav">
                {props.navLinks.map(link => (
                    <li className="nav-item" >
                        <a key={link.id} className="nav-link" href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul >
        </nav >
    )
}

