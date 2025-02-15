import BlueBar from "./BlueBar";
import Cards from "./Cards";
import Jumbo from "./Jumbo";
import comics from "../data/comics";

export default function Main() {

    return (
        <main>
            <Jumbo />

            <Cards cards={comics} />

            <BlueBar />

        </main >

    );
}