
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flat } from "../../components/flat/Flat";
import { getApartments, getFilteredApartments } from "../../redux/actions";
import "./flats.css";
const limit = 3;
export function Flats() {
    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);
    let { apartments, totalApartments } = useSelector((state) => state);
    let dispatch = useDispatch();
    useEffect(() => {
        getApartments(dispatch, page, limit)
        // setData(apartments)
    }, [page])
    const totalPages = useRef(Math.ceil(totalApartments / limit));

    // function handleFilter(event) {
    //     let type = event.target.value;
    //     getFilteredApartments(dispatch, type);
    // }
    // function handleSort(event) {
    //     let type = event.target.value
    //     axios("http://localhost:5500/api/apartments/")
    //         .then(res => {
    //             setData(res.data.apartments);
    //             totalPages.current = res.data.totalApartments;
    //         }).catch(error => console.log(error))
    // }
    return (
        <>
            <div className="flatFilterSection">
                {/* <select className="flatFilter" onChange={handleFilter}>
                    <option defaultValue>Select Resident Type</option>
                    <option value="owner">Owner</option>
                    <option value="tenant">Tenant</option>
                </select> */}
                {/* onChange={handleSort} */}
                <select className="flatSort">
                    <option defaultValue>Sort By Flat No.</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>
            <div className="flats">
                <div className="flatsWrapper">
                    {apartments && apartments.map(apartment => {
                        return <Flat key={apartment?._id} apartment={apartment} />
                    })}
                </div>
                <div className="flatsNavigateButtons">
                    <button className="flatsNavigateButton" disabled={page === 1} onClick={() => {
                        setPage(page - 1)
                    }}>Prev</button>
                    {Array(totalPages.current || 4).fill(0).map((item, index) => {
                        return <button id={page === (index + 1) ? "active" : ""} key={index} className="flatsNavigateButton" onClick={() => {
                            setPage(index + 1)
                        }}>{index + 1}</button>
                    })}
                    <button className="flatsNavigateButton" disabled={page >= Math.ceil(10 / 3)} onClick={() => {
                        setPage(page + 1)
                    }}>Next</button>
                </div>
            </div>
        </>
    )
}