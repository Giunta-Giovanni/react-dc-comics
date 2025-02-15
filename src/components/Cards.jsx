export default function Cards(props) {
    console.table(props.cards)
    return (
        <section className="content-box">
            <div className="container">
                <div className="box-bk-card">
                    {props.cards.map(card => (
                        <div key={card.id} className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card ">
                            <div className="bk-card-box-image">
                                <img src={card.thumb} alt="{card.series}" />
                            </div>
                            <div className="bk-card-text">
                                <p>{card.series}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

