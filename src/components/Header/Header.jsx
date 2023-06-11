import { Link } from "react-router-dom";
import Icon from "../Icon";
import LogoJokr from "../Logo-jokr";
import Navbar from "./components/Navbar";
import Wrapper from "../Wrapper";

function Header() {
  return (
    <header className="bg-dark-blue-jokr">
      <Wrapper>
        <div className="flex items-center justify-between p-4 sm:px-10">
          <Link to="/">
            <LogoJokr />
          </Link>
          <Navbar />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
