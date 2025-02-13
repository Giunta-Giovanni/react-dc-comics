export default function Footer() {
    return (
        <footer>
            <div className="footer-link">
                <div className="container">
                    {/* box link */}
                    <div className="box-link d-flex">
                        <div className="link-col">
                            <h5>DC COMICS</h5>
                            <ul>
                                <li>
                                    <a href="#">Characters</a>
                                </li>
                                <li>
                                    <a href="#">Comics</a>
                                </li>
                                <li>
                                    <a href="#">Movies</a>
                                </li>
                                <li>
                                    <a href="#">TV</a>
                                </li>
                                <li>
                                    <a href="#">Games</a>
                                </li>
                                <li>
                                    <a href="#">Videos</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                            </ul>

                            <h5>SHOP</h5>
                            <ul>
                                <li>
                                    <a href="#">Shop DC</a>
                                </li>
                                <li>
                                    <a href="#">Shop DC Collectibles</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-col">
                            <h5>DC</h5>
                            <ul>
                                <li>
                                    <a href="#">Terms Of Use</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Advertising</a>
                                </li>
                                <li>
                                    <a href="#">Jobs</a>
                                </li>
                                <li>
                                    <a href="#">Subscriptions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-col">
                            <h5>SITES</h5>
                            <ul>
                                <li>
                                    <a href="#">DC</a>
                                </li>
                                <li>
                                    <a href="#">MAD Magazine</a>
                                </li>
                                <li>
                                    <a href="#">DC Kids</a>
                                </li>
                                <li>
                                    <a href="#">DC Universe</a>
                                </li>
                                <li>
                                    <a href="#">DC Power Visa</a>
                                </li>
                            </ul>
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