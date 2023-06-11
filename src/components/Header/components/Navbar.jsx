import { menuItems } from "../../../utils/menu-items/menu-items"
import MenuItem from "./MenuItem"

function Navbar() {
  return (
    <nav>
      <ul>{menuItems.map((menu,index)=>{
        return(
          <MenuItem items={menu} key={index}/>
        )
      })}</ul>
    </nav>
  )
}

export default Navbar
