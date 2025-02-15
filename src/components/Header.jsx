import NavBar from "./Navbar";
export default function Header(props) {


    return (
        <header className="d-flex justify-content-between align-items-center bg-light p-3">
            <div className="container">
                <div className="row">
                    <div className="col d-flex">
                        <div className="header-content box-logo">
                            <img src="./img/dc-logo.png" alt="DC Logo" className="dc-logo" />
                        </div>
                    </div>
                    <div className="col">
                        <NavBar navLinks={props.appNavLinks} />
                    </div>
                </div>
            </div>
        </header>
    );
}
