import React, { useState } from "react";

// import { axiosWithAuth } from "../actions";
import { axiosWithAuth } from "./axiosWithAuth"

// react-router-dom
import { Link } from "react-router-dom"

export const Login = props => {
    console.log(props);
    const [ user, setUser] = useState({
        credentials: {
            username: "",
            password: ""
        }
    })
    
    const handleChange = e => {
        setUser({
            credentials: {
                ...user.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', user.credentials )
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                user.props.history.push('/protected');
            })
            .catch(err => console.log(`Login.js axiosWithAuth error`, err.response))
    }


    return (
        <div className="login-container">
            <form className="login-form" onSubmit={login}>
                <input 
                    type="text"
                    name="username"
                    label="username"
                    placeholder="username"
                    value={props.username}
                    onChange={handleChange}
                    className="input"
                />
                <input 
                    type="text"
                    name="password"
                    label="password"
                    placeholder="password"
                    value={props.password}
                    onChange={handleChange}
                    className="input"
                />
                <button className="login-button" >Login</button>
            </form>
        </div>
    )
}

export default Login;