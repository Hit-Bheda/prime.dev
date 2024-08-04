import { useContext } from "react";
import "./dropdown.scss"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom"

function DropDown() {
    const navigate = useNavigate()
    const { setIsAuthenticated } = useContext(AuthContext)
    const logout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
        navigate("/login")
    }
  return (
    <div className="drop-down">
        <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li>Setting</li>
            <li onClick={logout}>Logout</li>
        </ul>
    </div>
  )
}

export default DropDown