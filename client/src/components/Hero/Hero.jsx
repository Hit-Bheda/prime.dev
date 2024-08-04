import "./hero.scss"
import SearchImg from "../../assets/search.png"

function Hero() {
  return (
    <div className="hero">
        <div className="hero-txt">
            <h3> Discover New <span>Articles</span></h3>
            <div className="search">
                <img src={SearchImg} alt="*" />
                <input type="text" name="search" placeholder="Search...."/>
            </div>
        </div>
    </div>
  )
}

export default Hero