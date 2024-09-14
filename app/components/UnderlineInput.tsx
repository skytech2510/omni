import { ChangeEventHandler } from "react";

interface UnderlineButtonPropsType {
  width?: string;
  onChange?: ChangeEventHandler;
  value?:string|number;
  placeholder?: string;
  classNames?:string;
  defaultValue?:string
}
const UnderlineInput: React.FC<UnderlineButtonPropsType> = ({
  width = "w-full",
  onChange,
  placeholder,
  classNames,
  value,
  defaultValue = ''
}) => {
  return (
    <div className={`${width} ${classNames}`}>
      <input
        className=" transition-all w-full border-[transparent] border-b-[1px] border-b-[#454545] outline-none px-5 py-1 focus:border-b-[#5B56EF]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default UnderlineInput;
