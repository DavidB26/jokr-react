import { useEffect, useRef } from 'react';
import styled from 'styled-components'

const HamburguerStyled = styled.div`
  height: 45px;
  width: 45px;
  position: relative;
  z-index:50;

  .ham-bar {
    width: 70%;
    height: 2px;
    background-color: #57e39e;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.6s, opacity 0.8s, top 0.6s;
  }

  .bar-top {
    top: 25%;
  }

  .bar-bot {
    top: 75%;
  }

  &.active .bar-top {
    transform: translate(-50%, -50%) rotate(-315deg);
    top: 50%;
  }
  &.active .bar-mid {
    opacity: 0;
  }
  &.active .bar-bot {
    transform: translate(-50%, -50%) rotate(-225deg);
    top: 50%;
  }

  &.active {
    background-color: unset;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

function Hamburguer({active,setActive}) {
  const hamburguerRef = useRef()

  const handleClick = () => {
    if (active === "active") {
      return setActive("");
    } else {
      return setActive("active");
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (active === "active") {
      body.classList.toggle("nooverflow");
    } else {
      body.classList.remove("nooverflow");
    }
  }, [active]);

  return (
    <HamburguerStyled ref={hamburguerRef} className={active} onClick={handleClick}>
      <div className="ham-bar bar-top"></div>
      <div className="ham-bar bar-mid"></div>
      <div className="ham-bar bar-bot"></div>
    </HamburguerStyled>
  );
}

export default Hamburguer
