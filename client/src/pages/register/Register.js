import React,{useState} from 'react'
import { Link } from 'react-router-dom' 
import '../register/register.css'
import axios from 'axios'
function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false); 
  
    const handlesubmit = async (e) =>{
        setError(false)
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register", {
                username,email, password
            });
            res.data && window.location.replace('/login');
        }catch(err){
            setError(true)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerform" onSubmit={handlesubmit}>
                <label>Username</label>
                <input type="text"  
                    className="registerInput" 
                    placeholder="your username.."
                    onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input type="email"  
                    className="registerInput" 
                    placeholder="enter your email.."
                    onChange={e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" 
                    className="registerInput" 
                    placeholder="enter password"
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerbutton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">LOGIN</Link>
            </button>
            {error && <span style={{color: "red", marginTop: "10px"}}>Something went wrong!</span>}
        </div>
    )
   
}

export default Register
