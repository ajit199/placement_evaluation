
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flat } from "../../components/flat/Flat";
import { getApartments } from "../../redux/actions";
import "./flats.css";
export function Flats() {

    let { apartments } = useSelector((state) => state);
    let dispatch = useDispatch();
    useEffect(() => {
        getApartments(dispatch)
    }, [])
    return (
        <div className="flats">
            <div className="flatsWrapper">
                {apartments && apartments.map(apartment => {
                    return <Flat key={apartment?._id} apartment={apartment} />
                })}
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