import BlueBar from "./BlueBar";
import Cards from "./Cards";
import Jumbo from "./Jumbo";
import comics from "../data/comics";
import shopBox from "../data/shopbox";

export default function Main() {

    return (
        <main>
            <Jumbo />

            <Cards cards={comics} />

            <BlueBar shops={shopBox} />

        </main >

    );
}