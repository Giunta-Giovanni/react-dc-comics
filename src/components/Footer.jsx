export default function Footer() {
    return (
        <footer>
            <div className="footer-link">
                <div className="container">

                </div>
            </div>
            <div className="footer-social">
                <div className="container social">
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
        </footer>
    )
}