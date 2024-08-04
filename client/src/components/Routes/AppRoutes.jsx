import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import Home from "../../pages/Home"
import NewPost from "../../pages/NewPost"
import Profile from "../../pages/Profile"
import Layout from "../Layout"
import ReadPost from "../../pages/ReadPost"

function AppRoutes() {
    const { isAuthenticated } = useContext(AuthContext)
  return (
        <Routes>
          <Route element={<Layout />}>
            {/* Public Routes */}

            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={!isAuthenticated ? <Register/> : <Navigate to="/" />} />

            {/* Private Routes */}
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/new-post" element={isAuthenticated ? <NewPost /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isAuthenticated ? <Profile/> : <Navigate to="/login" />} />
            <Route path="/readpost/:id" element={isAuthenticated ? <ReadPost /> : <Navigate to="/login" /> } />
            <Route path="*" element={<div>Page not found</div>} /> 
          </Route>  
        </Routes>
  )
}

export default AppRoutes