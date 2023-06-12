import { useRef } from "react";
import { menuItems } from "../../../utils/menu-items/menu-items"
import MenuItem from "./MenuItem"
import styled from 'styled-components'

const NavbarStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-block-start: 55px;
  background-color: #032039;
  position: fixed;
  transition: right 0.5s;
  top: 0;
  right: -75%;
  block-size: 100vh;
  inline-size: 248px;
  z-index: 50;
  color: #85a2b3;
  
  &.active {
    right: 0;
  }

  @media screen and (min-width: 768px) {
    display: block;
    block-size: unset;
    inline-size: unset;
    position: unset;
    padding-block-start: unset;
  }
`;

function Navbar({active,setActive}) {
  const menuRef = useRef();

  const handleClick = () => {
    const links = menuRef.current.querySelectorAll("li");
    links.forEach((item,index) => {
      item.addEventListener('mousedown',()=>{
        console.log('click')
        index != 2 && setActive('')
      }
      )
    });
  };
  return (
    <NavbarStyled ref={menuRef} className={active} onClick={handleClick}>
      <ul className="flex flex-col gap-8 sm:flex-row">
        {menuItems.map((menu, index) => {
          return <MenuItem items={menu} key={index} index={index} />;
        })}
      </ul>
    </NavbarStyled>
  )
}

export default Navbar