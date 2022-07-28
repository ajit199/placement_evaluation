import "./register.css";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getApartments } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Register() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { apartments } = useSelector((state) => state);
    let username = useRef();
    let email = useRef();
    let password = useRef();
    let apartmentId = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        let user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            apartmentId: apartmentId.current.value
        }
        axios.post("http://localhost:5500/api/auth/register", user).then((res) => {
            alert(res.data);
            navigate("/login", { replace: true });
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getApartments(dispatch)
    }, [])
    return (
        <>
            <h2 className="registerTitle">Register</h2>
            <div className="register">
                <div className="registerDiv">
                    <form className="registerForm" onSubmit={handleSubmit}>
                        <input placeholder="Username" type={"text"} required className="loginInput" ref={username} />
                        <input placeholder="Email" required type={"email"} className="loginInput" ref={email} />
                        <input placeholder="Password" minLength={6} required type={"password"} className="loginInput" ref={password} />
                        <select className="loginInput" ref={apartmentId}>
                            <option defaultValue>Select</option>
                            {apartments && apartments.map((apartment) => {
                                return (
                                    <option key={apartment._id} value={apartment._id}>{apartment.name}</option>
                                )
                            })}
                        </select>
                        <button className="loginButton">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}