import './posts.scss'
import { useState,useEffect } from 'react'
import PostCard from '../PostCard'
import { getAllPost } from '../../services/apiServices'

function Posts() {
  const [ posts, setPosts ] = useState([])
  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const response = await getAllPost();
        console.log(response)
        setPosts(response)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchPosts()
  },[])
  const catagories = [ "Javascript", "NodeJs", "Java", "Spring", "Web3", "DSA", "Block Chain" ]
  return (
    <div className="posts">
        <div className="top-bar">
            <ul className="catagories">
                <li className="cat-btn">Catagories</li>
                {catagories.map(((cats,key) => (
                    <li key={key}>{cats}</li>
                )))}
            </ul>
        </div>
        <div className="cards">
          {posts.map((post,key) => (
            <PostCard key={key} title={post.title} story={post.story} createdAt={post.createdAt} id={post._id}/>
          ))}
        </div>
    </div>
  )
}

export default Posts