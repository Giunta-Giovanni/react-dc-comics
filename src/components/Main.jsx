import BlueBar from "./BlueBar";
import Jumbo from "./Jumbo";

export default function Main() {
    return (
        <main>
            <Jumbo />

            <section className="content-box">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            {/* contenitore card */}
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://imgs.search.brave.com/aUNyvZBXUulb963JH7KnQm9AMr8bcBoLsiHREOqayIU/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWZm/ZWYzMDMtMGZhYy00/OGRkLTg3ODctYzUy/NTk0MDk2ODAwXzEu/MTc1ZDk1Mjg2NzY0/OGEwOTczMTY2NGMy/MTE1NjNlYWIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY" alt="" />
                                </div>
                                <p className="card-text">testo immagine</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <BlueBar />

        </main >

    );
}