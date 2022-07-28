
import { Flat } from "../../components/flat/Flat";
import "./flats.css";
export function Flats() {

    return (
        <div className="flats">
            <div className="flatsWrapper">
                <Flat />
                <Flat />
                <Flat />
            </div>
            <div className="flatsNavigateButtons">
                <button className="flatsNavigateButton">Prev</button>
                <button className="flatsNavigateButton">1</button>
                <button className="flatsNavigateButton">2</button>
                <button className="flatsNavigateButton">3</button>
                <button className="flatsNavigateButton">Next</button>
            </div>
        </div>
    )
}