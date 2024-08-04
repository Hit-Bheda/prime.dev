import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate, Route } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Login from "../../pages/Login"

function PrivateRoutes() {
  const isAuth = useContext(AuthContext)
  return (
    <>
    {isAuth ? (
        <>
            <Route path="/" element={<Home />} />
        </>
    ) : (
        <>
            <Navigate to="/login" replace/>
        </>
    )
    }
    </>
  )
}

function PublicRoutes(){
    return (
        <>
            <Route path="/login" element={<Login />} />
        </>
    )
}
export { PublicRoutes,PrivateRoutes}