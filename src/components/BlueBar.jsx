export default function BlueBar() {
    return (
        <section className="blue-bar">
            <div className="container d-flex justify-content-around text-white py-3">
                <div className="card-link">
                    <a href="#">
                        <div className="box-card-img">
                            <img src="./img/buy-comics-digital-comics.png" alt="Digital Comics" />
                        </div>
                        <p>DIGITAL COMICS</p>
                    </a>
                </div>
                <div className="card-link">
                    <a href="#">
                        <div className="box-card-img">
                            <img src="./img/buy-comics-merchandise.png" alt="DC Merchandise" />
                        </div>
                        <p>DC MERCHANDISE</p>
                    </a>
                </div>
                <div className="card-link">
                    <a href="#">
                        <div className="box-card-img">
                            <img src="./img/buy-comics-subscriptions.png" alt="Subscription" />
                        </div>
                        <p>SUBSCRIPTION</p>
                    </a>
                </div>
                <div className="card-link">
                    <a href="#">
                        <div className="box-card-img">
                            <img src="./img/buy-comics-shop-locator.png" alt="Comic Shop Locator" />
                        </div>
                        <p>COMIC SHOP LOCATOR</p>
                    </a>
                </div>
                <div className="card-link">
                    <a href="#">
                        <div className="box-card-img">
                            <img src="./img/buy-dc-power-visa.svg" alt="DC Power Visa" />
                        </div>
                        <p>DC POWER VISA</p>
                    </a>
                </div>
            </div>
        </section>
    )
}