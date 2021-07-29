import React ,{ useState, useEffect }from 'react'
import Header from '../../Components/header/Header'
import Sidebar from '../../Components/sidebar/Sidebar'
import Post from '../../Components/posts/Post'
import '../home_page/home.css'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        }
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header/>
            <div className="home">
                <Post posts = {posts}/>
                <Sidebar/>
            </div>
            
        </>
    )
}

export default Home
