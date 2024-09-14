import Image from "next/image";
import { ChangeEventHandler } from "react";
interface InputPropsType {
  type?: "text" | "password"|"email"|"number"|"date";
  image?: string;
  placeholder?: string;
  className?:string,
  width?:string;
  onChange?:ChangeEventHandler
  value?:any
}
const Input: React.FC<InputPropsType> = ({ type, image, placeholder, width="w-full", className, onChange, value }) => {
  return (
    <div className={`${width} relative`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" rounded-full w-full text-[12px] pl-10 pr-3 py-2 border-[1px] outline-none border-[#454545]  focus:border-[1px] focus:shadow-lg focus:border-[#5B56EF] transition-all"
      />
      <div className="absolute top-[50%] -translate-y-[50%] left-[10px] flex flex-row justify-between gap-2">
        <Image
          src={`/assets/icons/${image}`}
          width={"16"}
          height={"16"}
          alt=""
        />
        <div className="w-[1px] h-[inherit] bg-[#454545]"></div>
      </div>
    </div>
  );
};
export default Input;
