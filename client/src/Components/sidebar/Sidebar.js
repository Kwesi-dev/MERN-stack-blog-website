import React , {useState, useEffect} from 'react'
import '../sidebar/sidebar.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
       const getPost = async ()=>{
           const res = await axios.get("/categories");
           setCats(res.data);
       }
       getPost();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle" >ABOUT ME</span>
                <img src="https://source.unsplash.com/250x300/?nature,water" alt=""/>
                <p>
                    My name is Samuel and I am developer.I do both web development.
                    I am mern stack developer.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c=> 
                        <Link to={`/cat?=${c.name}`} className="link">
                            <li className="sidebarlistItem">{c.name}</li>
                        </Link>
                    )}
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebaricon fab fa-facebook-square"></i>
                    <i className="sidebaricon fab fa-twitter-square"></i>
                    <i className="sidebaricon fab fa-pinterest-square"></i>
                    <i className="sidebaricon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
