import Image from "next/image";
import check from "./assets/check.svg";
import { useState } from "react";
interface CheckBoxPropsType {
  label: string;
  bgColor: string;
}
const CheckBox: React.FC<CheckBoxPropsType> = ({
  label,
  bgColor = "#5B56EF",
}) => {
  const [state, setState] = useState<boolean>(false);
  const handleToggle = () => {
    setState((state) => !state);
  };
  const baseClasses =
    "w-4 h-4  rounded-[3px] flex flex-row justify-center align-middle";
  const varientClasses = state
    ? `bg-[#5B56EF]`
    : `border-[1px] border-[#777D87]`;
  return (
    <>
      <div className="flex flex-row gap-5 items-center">
        <div
          onClick={handleToggle}
          className={`${baseClasses} ${varientClasses}`}
        >
          {state && <Image src={check} width={16} height={16} alt="" />}
        </div>
        <div>
            {label}
        </div>
      </div>
    </>
  );
};
export default CheckBox;
