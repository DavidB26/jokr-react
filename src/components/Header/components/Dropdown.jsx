import { HashLink } from "react-router-hash-link";

function Dropdown({ submenus, dropdown }) {
  return (
    <ul
      className={`${
        dropdown ? "block" : "hidden"
      }  md:absolute md:p-4 md:pt-8 flex flex-col gap-6 pt-4 bg-dark-blue-jokr right-0 top-full rounded-lg z-40 text-base`}
    >
      {submenus.map((submenu, index) => (
        <li
          className="text-right duration-300 hover:text-grey3-jokr"
          key={index}
        >
          <HashLink className="truncate" to={submenu.url} smooth>
            {submenu.title}
          </HashLink>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
