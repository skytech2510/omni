import { ChangeEventHandler, ReactEventHandler } from "react";
import Image from "next/image";
interface SelectPropsType {
  options: Array<{ label: string; value: string }>;
  onChange?: ChangeEventHandler;
  value?: string | number;
  onSelect?: ReactEventHandler;
  width?:string,
  image?:string
}
const Select: React.FC<SelectPropsType> = ({
  options,
  onChange,
  onSelect,
  value,
  image,
  width="w-full"
}) => {
  return (
    <>
      <div className={`${width} relative`}>
        <select
          onChange={onChange}
          onSelect={onSelect}
          name=""
          value={value}
          id=""
          className=" rounded-full w-full text-[12px] px-10 py-2 border-[1px] outline-none border-[#454545]  focus:border-[1px] focus:shadow-lg focus:border-[#5B56EF] transition-all"
        >
          {options &&
            options.map((option, index) => {
              return (
                <option
                  className="p-4 text-[16px] m-10"
                  key={index}
                  value={option.value}
                >
                  {option.label}
                </option>
              );
            })}
        </select>
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
    </>
  );
};
export default Select;
