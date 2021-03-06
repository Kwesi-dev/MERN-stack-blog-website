import React, {useRef, useContext} from 'react'
import '../login/login.css'
import { Link } from 'react-router-dom'
import {Context} from '../../context/Context'
import axios from 'axios'
function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isfetching } = useContext(Context);

    const handleSubmit = async (e)=>{
        e.preventDefault(); 

        dispatch({type: "LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value    
            });

            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        }catch(err){
            dispatch({type: "LOGIN_FAILURE"})
        }

    }


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginform" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text"  className="loginInput" placeholder="enter your username.." ref={userRef}/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="enter password" ref={passwordRef}/>
                <button className="loginbutton" type="submit" disabled={isfetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">REGISTER</Link>
            </button>
        </div>
    )
}

export default Login
