import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export function Login() {

    let email = useRef();
    let password = useRef();
    let navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        let user = {
            email: email.current.value,
            password: password.current.value,
        }
        axios.post("http://localhost:5500/api/auth/login", user).then((res) => {
            alert(res.data.message);
            localStorage.setItem("token", res.data.token);
            navigate("/", { replace: true });
        }).catch(error => console.log(error));
    }
    return (
        <>
            <h2 className="loginTitle">Login</h2>
            <div className="login">
                <div className="loginDiv">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <input placeholder="Email" required type={"email"} className="loginInput" ref={email} />
                        <input placeholder="Password" required type={"password"} className="loginInput" ref={password} />
                        <button className="loginButton">Log in</button>
                        <button className="loginRegisterButton" onClick={() => {
                            navigate("/register", { replace: true });
                        }}>
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}