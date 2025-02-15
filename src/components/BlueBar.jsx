
export default function BlueBar(props) {
    console.log(props.shops)
    const shops = props.shops
    return (
        <section className="blue-bar">
            <div className="container shop-box">
                {shops.map(shop => (
                    <div key={shop.id} className="card-link">
                        <a href="#">
                            <div className="box-card-img">
                                <img src={shop.imgSrc} alt={shop.label} />
                            </div>
                            <p>{shop.label}</p>
                        </a>
                    </div>
                ))}

            </div>
        </section>
    )
}

{/* <div className="card-link">
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
                </div> */}