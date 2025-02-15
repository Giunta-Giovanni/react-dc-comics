import BoxLink from "./BoxLinks";

export default function Footer(props) {

    // facciamo il destructuring
    const { appCategory1, appCategory2, appCategory3, appCategory4 } = props;
    return (
        <footer>
            <div className="footer-link">
                <div className="container">
                    {/* box link */}
                    <div className="box-link d-flex">
                        <div className="link-col">
                            <h5>DC COMICS</h5>
                            <BoxLink linkCategory={appCategory2} />

                            <h5>SHOP</h5>
                            <BoxLink linkCategory={appCategory3} />
                        </div>
                        <div className="link-col">
                            <h5>DC</h5>
                            <BoxLink linkCategory={appCategory1} />
                        </div>
                        <div className="link-col">
                            <h5>SITES</h5>
                            <BoxLink linkCategory={appCategory4} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-social">
                <div className="container social ">
                    <div className="row">
                        {/* colonna sinistra */}
                        <div className="col">
                            {/* pulsante iscriviti */}
                            <button type="button" className="btn-sign">SIGN-UP NOW!</button>
                        </div>

                        {/* colonna destra */}
                        <div className="col col-chl">
                            {/* canali da seguire */}
                            <p>FOLLOW US</p>
                            <ul className="channel">
                                <li className="single-channel">
                                    <a href="#">
                                        <img src="./img/footer-facebook.png" alt="" />
                                    </a>

                                </li>
                                <li className="single-channel">
                                    <a href="">
                                        <img src="./img/footer-twitter.png" alt="" />
                                    </a>

                                </li>
                                <li className="single-channel">
                                    <a href="">
                                        <img src="./img/footer-youtube.png" alt="" />
                                    </a>

                                </li>
                                <li className="single-channel">
                                    <a href="">
                                        <img src="./img/footer-pinterest.png" alt="" />
                                    </a>

                                </li>
                                <li className="single-channel">
                                    <a href="">
                                        <img src="./img/footer-periscope.png" alt="" />
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </footer >
    )
}