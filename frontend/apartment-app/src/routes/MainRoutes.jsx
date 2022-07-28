import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";

export function MainRoutes() {
    let token = localStorage.getItem("token");
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={token ? <Home /> : <Login />} />
            </Routes>
        </>
    )
}