import TextEditor from "../../components/TextEditor/TextEditor"
import "./newpost.scss"

function NewPost() {
  return (
    <div className="new-post">
        <div className="input-form">
          <TextEditor 
            config={{
              placeholderText: "Write your post here.......",
              
            }}
          />
        </div>
    </div>
  )
}

export default NewPost