// import { useEffect, useState } from "react"
import Hero from "../../components/Hero"
import Posts from "../../components/Posts"
import "./home.scss"
// import { getAllPost } from "../../services/apiServices"
// import PostCard from "../../components/PostCard"

function Home() {
  // const [ posts, setPosts ] = useState([])
  // useEffect(()=>{
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await getAllPost();
  //       console.log(response)
  //       setPosts(response)
  //     } catch (error) {
  //       console.error('Error:', error)
  //     }
  //   }
  //   fetchPosts()
  // },[])
  return (
    <div className="home">
      <Hero />
      <Posts/>
      {/* <div className="cards">
      {posts.map((post,key) => (
        <PostCard key={key} title={post.title} story={post.story} createdAt={post.createdAt}/>
      ))}
      </div> */}
    </div>
  )
}

export default Home