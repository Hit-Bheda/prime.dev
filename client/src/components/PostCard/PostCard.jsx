import HtmlRenderer from "../HtmlRenderer"
import "./postcard.scss"
import FormatDate from "../../utils/FormateDate"
import FormatString from "../../utils/FormateString"
import propTypes from 'prop-types'
import { Link } from "react-router-dom"

function PostCard( props ) {

  const images = [
	"https://images.unsplash.com/photo-1485254767195-60704c46702e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1681426427765-73932ac651a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1669825050788-5e32376c761e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1668104454432-69c53f7196fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
	"https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
	"https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const ranNum = Math.floor(Math.random() * 6);
  const story = FormatString(props.story, 100);
  const date = FormatDate(props.createdAt)
  return (
    <div className="post-card">
			<img className="poster" src={images[ranNum]} alt=""></img>
			<div className="post">
				<div className="date">{date}</div>
				<div className="title">{props.title}</div>
				<div className="descripion"><HtmlRenderer htmlContent={story}/></div>
				<Link to={`/readpost/${props.id}`} className="btn">Read More</Link>
			</div>
		</div>
  )
}
PostCard.propTypes ={
	title: propTypes.string,
	story: propTypes.string,
	createdAt: propTypes.string,
	id: propTypes.string,
}

export default PostCard