import "./topbar.css";
import { Link } from "react-router-dom";
export function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="topbarLogo">Flats</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search By Block Name" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight"></div>
        </div>
    )
}