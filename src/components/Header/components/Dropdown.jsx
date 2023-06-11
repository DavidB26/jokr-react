
function Dropdown({submenus}) {
  return (
    <ul>
      {submenus.map((submenu, index) => (
        <li key={index}>
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown
