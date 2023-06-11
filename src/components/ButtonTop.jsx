import { useEffect } from "react";
import Icon from "./icon/index";

function ButtonTop() {
    const goTop = () =>{
        document.body.scrollTop = 0;
        
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        goTop()
},[])
      
  return (
    <div className="duration-75 goTop" onClick={goTop}>
      <Icon
        name={"chevron-up"}
        size="40"
        color={"#7D9DB7"}
      />
    
    </div>
  );
}

export default ButtonTop;
