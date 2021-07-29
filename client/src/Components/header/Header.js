import React from 'react'
import '../header/header.css'
function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headertitlesm">React & Node</span>
                <span className="headertitlelg">Blog</span>
            </div>
            <img className="headerimg" src="https://source.unsplash.com/1900x900/?nature,water" alt=""/>
        </div>
    )
}

export default Header
