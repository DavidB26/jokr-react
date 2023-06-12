import { useNavigate } from "react-router";

function Dropdown({ submenus, dropdown }) {

  const navigate = useNavigate()

  const handleNavigate = (index) =>{
    console.log(index);
    if(index === 0 || index === 1){
      navigate('/#what-we-do')
    }
  }

  return (
    <ul
      className={`${
        dropdown ? "block" : "hidden"
      }  md:absolute md:p-4 flex flex-col gap-6 mt-4 bg-dark-blue-jokr right-0 top-full rounded-lg z-40 text-base`}
    >
      {submenus.map((submenu, index) => (
        <li className="text-right" key={index} onClick={()=> handleNavigate(index)}>
          <a className="truncate" href={submenu.url}>
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;