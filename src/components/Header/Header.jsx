import { Link } from "react-router-dom";
import Icon from "../Icon";
import LogoJokr from "../Logo-jokr";
import Navbar from "./components/Navbar";
import Wrapper from "../Wrapper";
import Hamburguer from "./components/Hamburguer";
import { useState } from "react";

function Header() {
  const [active,setActive] = useState("")
  return (
    <header className="sticky top-0 z-50 bg-dark-blue-jokr">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <Link to="/">
            <LogoJokr />
          </Link>
          <Navbar active={active} setActive={setActive}/>
          <Hamburguer active={active} setActive={setActive}/>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
