import Image, { StaticImageData } from "next/image";
import Dropdown from "../Dropdown";
interface MyOpportunityPropsType {
  pic: string | StaticImageData;
  amount: number;
  description: string;
  name: string;
  from: string;
  to: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickEdit:()=>void;
  onClickDelete:()=>void;
}
const MyOpportunityCard: React.FC<MyOpportunityPropsType> = ({
  amount,
  name,
  from = Date.now,
  to,
  pic,
  description,
  onClick,
  onClickDelete,
  onClickEdit
}) => {
  return (
    <>
      <div className="rounded-lg flex flex-row flex-wrap justify-between gap-5 p-4 border-[1px] transition-all border-[#45454520] hover:shadow-md hover:scale-[1.01]">
        <div>
          <div className=" relative">
            <Image
              src={pic}
              width={"100"}
              height={"100"}
              alt=""
              
            />
            <div className=" absolute top-0 bg-[#00000070] w-full h-full flex flex-row justify-center items-center">
              <Image src={"/assets/opportunities/status/pending.svg"} width={60} height={60} alt=""/>
            </div>
          </div>
          
        </div>
        <div className=" flex flex-col flex-wrap justify-between">
          <div className=" flex flex-row flex-wrap items-center justify-between text-[#5B56EF] text-[16px]">
            <div>{name}</div>
            <div className="text-right">{amount} USD</div>
          </div>
          <div className="text-[12px] text-[#777D87]">{name}</div>
          <div className=" text-[#454545]">{description}</div>
          <div className=" flex flex-row flex-wrap  gap-3 items-center">
            <div className=" rounded-full px-2 bg-[#E8E8FE] text-[#5B56EF]">
              Open until <span className="text-[16px]">20 : 00, Tomorrow</span>
            </div>
          </div>
        </div>
        <div>
          <Dropdown
            label={
              <Image
                src={"/assets/icons/vertical.svg"}
                width={30}
                height={100}
                alt=""
                className=" cursor-pointer"
              />
            }
            list={[{label:"Edit", action:onClickEdit}, {label:"delete", action:onClickDelete}]}
          />
        </div>
      </div>
    </>
  );
};
export default MyOpportunityCard;
