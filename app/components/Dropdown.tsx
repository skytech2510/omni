interface DropdownPropsType {
  label: string | React.ReactNode;
  list: Array<{label:string | React.ReactNode, action:()=>void}>;
}
import { useState, useEffect, useRef } from "react";
// import useOutsideClick from "./customHooks/useClickOutside";
const Dropdown: React.FC<DropdownPropsType> = ({ label, list }) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsDropdown((isDropdown) => !isDropdown);
  };
  const dropdownref = useRef(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (dropdownref.current && !dropdownref.current?.contains(event.target)) {
        setIsDropdown(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className=" relative dropdown" ref={dropdownref}>
      <div onClick={toggleDropdown} className="dropdown">
        {label}
      </div>
      {isDropdown && (
        <div className=" absolute top-5 -left-full bg-white shadow-md">
          <ul className="">
            {list &&
              list.map((item, index) => {
                return (
                  <li
                  onClick={item.action}
                    key={index}
                    className="dropdown transition-all hover:bg-[#5B56EF] hover:text-white cursor-pointer p-3"
                  >
                    {item.label}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
