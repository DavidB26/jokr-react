import Dropdown from "./Dropdown";

function MenuItem({ items }) {
  return (
    <li>
      {items.submenu ? (
        <>
          <button>
            {items.title}{''}
          </button>
          <Dropdown submenus={items.submenu}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
}

export default MenuItem;
