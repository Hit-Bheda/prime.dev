import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import "./layout.scss"
import Footer from "../Footer"

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout