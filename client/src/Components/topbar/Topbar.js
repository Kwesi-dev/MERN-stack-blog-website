import '../topbar/topbar.css'
import React ,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'

function Topbar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = ()=>{
        dispatch({type: "LOG_OUT"});
    }
    return (
        <div className = "topbar">
            <div className = "topleft">
                <i className="topicon fab fa-facebook-square"></i>
                <i className="topicon fab fa-twitter-square"></i>
                <i className="topicon fab fa-pinterest-square"></i>
                <i className="topicon fab fa-instagram-square"></i>
            </div>
            <div className = "center">
                <ul className= "toplist">
                    <li className = "toplistItem"><Link  className = "link" to="/" >HOME</Link></li>
                    <li className = "toplistItem"><Link  className = "link" to="/" >ABOUT</Link></li>
                    <li className = "toplistItem"><Link  className = "link" to="/" >CONTACT</Link></li>
                    <li className = "toplistItem"><Link  className = "link" to="/write" >WRITE</Link></li>
                    <li className = "toplistItem" onClick={handleLogout}>{ user && 'LOG-OUT'}</li>
                </ul>
            </div>
            <div className = "topright">
                {
                    user ? <Link to="/settings"><img className="topimg" src={user.profilepic} alt=""/></Link>
                    : (
                        <ul className="toplist">
                            <li className="toplistItem">
                                <Link  className = "link" to="/login" >LOGIN</Link>
                            </li>
                            <li className="toplistItem">
                                <Link  className = "link" to="/register" >REGISTER</Link>
                            </li>
                        </ul>
                    )

                    
                }

                <i className=" topsearchicon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
