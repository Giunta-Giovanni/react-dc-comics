import NavHeader from './NavHeader';
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
                        <NavHeader />
                    </div>
                </div>
            </div>
        </header>
    );
}
