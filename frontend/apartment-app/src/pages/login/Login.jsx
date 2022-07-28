import { useRef } from "react";
import "./login.css";

export function Login() {

    let email = useRef();
    let password = useRef();
    return (
        <>
            <h2 className="loginTitle">Login</h2>
            <div className="login">
                <div className="loginDiv">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <input placeholder="Email" required type={"email"} className="loginInput" ref={email} />
                        <input placeholder="Password" required type={"password"} className="loginInput" ref={password} />
                        <button className="loginButton">Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
}