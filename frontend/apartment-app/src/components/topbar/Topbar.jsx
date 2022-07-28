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
                    <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                    <input placeholder="Search By Block Name" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Home</div>
                    <div className="topbarLink">Flats</div>
                    <div className="topbarLink">About</div>
                </div>
            </div>
        </div>
    )
}