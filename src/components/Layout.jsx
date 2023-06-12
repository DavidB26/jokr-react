import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from './Footer/Footer'
import ButtonTop from "./ButtonTop"

function Layout() {
  return (
    <div>
      <Header/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
      <ButtonTop/>
    </div>
  )
}

export default Layout
