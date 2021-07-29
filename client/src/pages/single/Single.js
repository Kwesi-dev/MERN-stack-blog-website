import React from 'react'
import '../single/single.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Singlepost from '../../Components/singlePost/Singlepost'

function Single() {
    return (
        <div className="single">
            <Singlepost />
            <Sidebar/>
        </div>
    )
}

export default Single
