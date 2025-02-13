export default function Footer() {
    return (
        <footer>
            {/* riga */}
            <div className="row">
                {/* colonna superiore */}
                <div className="col-12 footer-nav">
                    <div className="row row-footer-nav">
                        <div className="col-2 col-footer-nav">
                            <h3>DC COMICS</h3>
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
                            <h3>SHOP</h3>
                            <ul>
                                <li>
                                    <a href="">SHOP DC</a>
                                </li>
                                <li>
                                    <a href="">SHOP DC Collectibles</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 col-footer-nav">
                            <div className="footer-nav-category">
                                <h3>DC</h3>
                                <p>lorem</p>
                            </div>
                        </div>

                        <div className="col-2 col-footer-nav">
                            <div className="footer-nav-category">
                                <h3>SITES</h3>
                                <p>lorem</p>
                            </div>
                        </div>
                        <div className="col-6 col-footer-nav"></div>



                    </div>

                </div>
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


        </footer >
    )
}