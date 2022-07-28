
import "./flat.css";
export function Flat({ apartment }) {
    return (
        <div className="flat">
            <div className="flatLeft">
                <p className="flatName">{apartment.name}</p>
                <span className="flatTotalResidents">Total Residents: 10</span>
            </div>
            <div className="flatRight">
                <img src={apartment.image} alt="flatImage" className="flatImg" />
            </div>
        </div>
    )
}