import "./navbar.scss"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import PlusIcon from "../../assets/plus.png"
import DropDown from "../DropDown"
import { Link, NavLink } from "react-router-dom"

function NavBar() {
  const { isAuthenticated } = useContext(AuthContext)
  const [isDropDown, setDropDown] = useState(false)
  return (
    <div className="navbar">
        <div className="left">
          <NavLink to="/">Prime</NavLink>
        </div>
        <div className="right">
          {!isAuthenticated ? <button>SignIn</button> 
          :<div>
            <Link to="/new-post" className="create-btn">
              <img src={PlusIcon} alt="*" />
              <h3>Create</h3>
            </Link> 
            <div className="profile-img" onClick={() => setDropDown(!isDropDown)}>
              <img src="https://images.unsplash.com/photo-1562159278-1253a58da141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="Profile Pic" />
            </div>
            {isDropDown ? <DropDown /> : null}
          </div>}
        </div>
    </div>
  )
}

export default NavBar