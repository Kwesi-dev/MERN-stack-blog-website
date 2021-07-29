import React, {useEffect, useState, useContext} from 'react'
import '../singlePost/singlepost.css'
import {useLocation, Link } from 'react-router-dom'
import axios from 'axios';
import {Context} from '../../context/Context'
function Singlepost() {
    const PF = "http://localhost:5000/images/";

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    const [post, setPost] = useState([]);
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.Desc)
        };
        getPost();
    }, [path])

    const {user} = useContext(Context)
    const handleDelete = async ()=>{
        try{
            await axios.delete(`/posts/${post._id}`, {data: {username: user.username}});
            window.location.replace("/");
        }catch(err){};
        
    };

    const handleUpdate = async ()=>{
        try{

            await axios.put(`/posts/${post._id}`, {
                username : user.username,
                title,
                desc
            });
            setUpdateMode(false)
        }catch(err){}
    }
    return (
        <div className="single_post">
            <div className="singlepostWrapper">
                {post.photo && 
                <img src={PF + post.photo} alt="" className="singlepostImg"/>
                }
                {updateMode ? (<input type="text" value={title} 
                    className="singlepostTitleInput"
                    autoFocus
                    onChange={e=>setTitle(e.target.value)}
                ></input>):(
                
                    <h1 className="singlepostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlepostEdit">
                            <i className=" singlepostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                            <i className=" singlepostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                    )}
                </h1>
                )}
               
                <div className="singlepostInfo">
                    <span className="singlepostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            {post.username}
                        </Link>
                    </span>
                    <span className="singlepostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea className="singlepostDescInput" value={desc} onChange = {e=>setDesc(e.target.value)}/> : 
                <p className="singlepostDesc">
                    {desc}
                </p>
                }
                {updateMode &&
                <button className="singlepostbtn"onClick={handleUpdate}>Update</button>
                }
            </div>
        </div>
    )
}

export default Singlepost
