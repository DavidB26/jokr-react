import { Link } from "react-router-dom";
import Icon from "../Icon";
import LogoJokr from "../Logo-jokr";
import Navbar from "./components/Navbar";

function Header() {
  return (
    <header className="flex justify-between p-4 bg-dark-blue-jokr sm:px-10">
      <Link to="/">
        <LogoJokr />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;