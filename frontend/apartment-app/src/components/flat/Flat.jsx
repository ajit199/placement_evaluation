
import "./flat.css";
export function Flat() {

    return (
        <div className="flat">
            <div className="flatLeft">
                <p className="flatName">Ganga Apartment</p>
                <span className="flatTotalResidents">Total Residents: 10</span>
            </div>
            <div className="flatRight">
                <img src="https://localwiki.org/media/cache/db/1e/db1eabbc931daf942c5d6db8d91f625a.jpg" alt="flatImage" className="flatImg" />
            </div>
        </div>
    )
}