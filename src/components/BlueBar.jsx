
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
                            <div className="box-card-txt">{shop.label}</div>
                        </a>
                    </div>
                ))}

            </div>
        </section>
    )
}
