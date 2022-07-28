import { Topbar } from "../components/topbar/Topbar";
import { Flats } from "./flats/Flats";
import { Navigate } from "react-router-dom";
export function Home() {
    let token = localStorage.getItem("token");

    if (!token) return <Navigate to={"/login"} replace={true} />
    return (
        <>
            <Topbar />
            <Flats />
        </>
    )
}