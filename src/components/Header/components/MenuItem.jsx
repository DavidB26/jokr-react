import { useEffect, useState, useRef } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import Icon from '../../icon/index';

function MenuItem({ items, index }) {
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState(0)
  
  const handleClick = (index) => {
    return () => {
      console.log('click');
      setActive(index);
      console.log(active)
    };
  }

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  useEffect(()=>{
    handleClick()
  },[active])
  // const onMouseEnter = () => {
  //   window.innerWidth > 960 && setDropdown(true);
  // };

  // const onMouseLeave = () => {
  //   window.innerWidth > 960 && setDropdown(false);
  // };

  return (
    <li className={`relative ${active === index && 'active'} text-2xl md:text-base`}>
      {items.submenu ? (
        <>
          <button
            className="flex items-center gap-1 duration-300 hover:text-grey3-jokr"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {setDropdown((prev) => !prev); handleClick(index)}}
          >
            {items.title}
            <Icon
              name={dropdown ? "chevron-up" : "chevron-down"}
              size="24"
              color={dropdown ? "#57E39E" : "#7D9DB7"}
            />
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link
          to={items.url}
          className="duration-300 hover:text-grey3-jokr"
          target={items.external ? "_blank" : ""}
          rel="noopener noreferrer"
          onClick={handleClick(index)}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
}

export default MenuItem;
