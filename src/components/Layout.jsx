import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from './Footer/Footer'

function Layout() {
  return (
    <div className="m-auto max-w-8xl">
      <Header/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
