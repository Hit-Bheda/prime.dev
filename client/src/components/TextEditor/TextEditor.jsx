import "./texteditor.scss"
import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/js/plugins/image.min.js"
import "froala-editor/css/themes/dark.min.css"
import "froala-editor/js/plugins/markdown.min.js"
import "froala-editor/js/plugins/code_view.min.js"
import { useRef, useState } from "react"
import { createPost } from "../../services/apiServices"
import { useNavigate } from "react-router-dom"

function TextEditor() {
const [ story, setStory ] = useState()
  const titleRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try{
      await createPost({title:titleRef.current.value,story})
      navigate("/")
    }catch (err) {
      console.error("Error While Creqating Post ", err);
    }
  }


  return (
    <div className="text-editor">
        <div className="title">
          <input type="text" name="title" id="title" ref={titleRef} placeholder="Enter Title..."/>
        </div>
        <FroalaEditor 
          model={story}
          onModelChange={e => setStory(e)}
          config={{
            placeholderText:"Start Your Story...",
            // theme:"dark"
          }}
          tag="textarea"
          placeholderText="Start Your Story....."
        />
        <div className="submit">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>  
    </div>
  )
}

export default TextEditor