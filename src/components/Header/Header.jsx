import { Link } from "react-router-dom";
import Icon from "../Icon";
import LogoJokr from "../Logo-jokr";
import Navbar from "./components/Navbar";
import Wrapper from "../Wrapper";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-blue-jokr">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
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
