"use client";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
interface TabMenuPropsType {
  classNames?:string;
  items: Array<{ lable: string; url: string }>;
}
const TabMenu: React.FC<TabMenuPropsType> = ({ items, classNames }) => {
  const path = usePathname();
  const getSelect = (path:string) : number => {
    if(path.includes("favouriteOpportunities")){
      return 1;
    }
    else if(path.includes("myOpportunities")){
      return 2;
    }
    else if(path.includes("allOpportunities")){
      return 0;
    }
    else return 0;
  }
  const [active, setActive] = useState<number>(getSelect(path));
  const navigator = useRouter();
  useEffect(()=>{
    if(path.includes("favouriteOpportunities")){
      setActive(1);
    }
    if(path.includes("myOpportunities")){
      setActive(2);
    }
    if(path.includes("allOpportunities")){
      setActive(0);
    }
  }, [path]);
  return (
    <>
      <div className={`flex flex-row flex-wrap border-b-[1px] w-fit border-b-[#D9D9D9] ${classNames}`}>
        {items &&
          items.map((item, index) => {
            return (
              <div
                key={index}
                className={`px-[20px] pb-[9px] text-[16px] cursor-pointer ${
                  index === active
                    ? "text-[#5B56EF] border-b-[3px] border-b-[#5B56EF]"
                    : ""
                }`}
                onClick={(e) => {
                  navigator.push(item.url); 
                }}
              >
                {item.lable}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default TabMenu;
