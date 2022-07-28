
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { flatDetails } from "../../redux/actions";
import "./flatDetails.css";
export function FlatDetails() {
    let { id } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        flatDetails(dispatch, id)
    }, [])
    let { residents } = useSelector((store) => store);
    return (
        <div className="flatDetails">
            {residents.length === 0 ? <h1>No Residents</h1> :
                (<>
                    <h1>Residents List</h1>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {residents && residents.map((resident) => {
                                return (
                                    <tr key={resident._id}>
                                        <td>{resident.name}</td>
                                        <td>{resident.age}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
                )}
        </div>
    )
}