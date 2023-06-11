function Dropdown({ submenus, dropdown }) {
  return (
    <ul
      className={`${
        dropdown ? "block" : "hidden"
      }  absolute p-4 flex flex-col gap-6 mt-4 bg-dark-blue-jokr right-0 top-full rounded-lg`}
    >
      {submenus.map((submenu, index) => (
        <li className="text-right" key={index}>
          <a className="truncate" href={submenu.url}>
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;