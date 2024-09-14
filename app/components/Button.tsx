import React from "react";
interface ButtonPropsType {
  variant: "fill" | "outline";
  color: string;
  width?:string;
  children: string|React.ReactNode|null;
  className?: string,
  onClick: () => void; // Define the onClick prop
}
const Button: React.FC<ButtonPropsType> = ({ variant, color, children, className, width="w-full", onClick }) => {
  const baseClasses: string = `w-full rounded-full p-[11px] outline-none text-[12px] ${className}`;
  const variantClasses: string =
    variant === "fill"
      ? `bg-[${color}] text-white`
      : `border-[${color}] border-[1px] text-[${color}]`;
  return (
    <div className={`${width}`}>
      <button onClick={onClick} className={`${baseClasses} ${variantClasses} hover:shadow-lg transition-all`}>{children}</button>
    </div>
  );
};
export default Button;
