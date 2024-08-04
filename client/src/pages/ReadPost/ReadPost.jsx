import { useParams } from "react-router-dom"
import "./readpost.scss"
import { useEffect, useState } from "react"
import { getOnePost } from "../../services/apiServices"
import HtmlRenderer from "../../components/HtmlRenderer"

function ReadPost() {
    const params = useParams()
    const [ post, setPost ] = useState({})
    console.log(params)
    useEffect(()=>{
        const fetchPost = async () => {
            try{
                const response = await getOnePost(params.id)
                setPost(response)
            } catch(err){
                console.error("Error while fetching post")
                return 0  // or throw an error if you want to stop the useEffect call on error
            }
        }
        fetchPost()
    },[params.id])
  return (
    <div className="read-post">
        <div className="post-title">{post.title}</div>
        <div className="post-story"><HtmlRenderer htmlContent={post.story} /></div>
    </div>
  )
}

export default ReadPost