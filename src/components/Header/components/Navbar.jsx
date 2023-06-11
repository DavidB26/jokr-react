import { menuItems } from "../../../utils/menu-items/menu-items"
import MenuItem from "./MenuItem"

function Navbar() {
  return (
    <nav className="text-grey2-jokr">
      <ul className="flex flex-col gap-8 sm:flex-row">
        {menuItems.map((menu, index) => {
          return <MenuItem items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
}

export default Navbar
