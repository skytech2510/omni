import Image, { StaticImageData } from "next/image";
import BlackHeart from "./assets/black-heart.svg"
import RedHeart from "./assets/red-heart.svg"
import { OpportunityDocument } from "@/models/Opportunity";
import { addToList } from "@/actions/favourList";
interface OpportunityPropsType {
  pic: string | StaticImageData;
  description:string;
  opportunity: OpportunityDocument
  isFavoriate: boolean;
  onClick?:(e:React.MouseEvent<HTMLDivElement>) => void
}
const OpportunityCard: React.FC<OpportunityPropsType> = ({
  isFavoriate,
  pic,
  description,
  opportunity,
  onClick
}) => {
  const addFavoList = () => {
    addToList(opportunity);
  }
  return <>
  <div className=" rounded-lg flex flex-row flex-wrap justify-between gap-5 p-4 border-[1px] transition-all border-[#45454520] hover:shadow-md hover:scale-[1.01]" >
    <Image src={pic} width={"100"} height={"100"} alt=""/>
    <div className=" flex flex-col flex-wrap justify-between">
        <div className=" flex flex-row flex-wrap items-center justify-between text-[#5B56EF] text-[16px]">
            <div className=" cursor-pointer" onClick={onClick}>
                {opportunity.title}
            </div>
            <div className="text-right">
                3000 USD
            </div>
        </div>
        <div className="text-[12px] text-[#777D87]">
            {opportunity.title}
        </div>
        <div className=" text-[#454545]">
            {description}
        </div>
        <div className=" flex flex-row flex-wrap justify-between gap-3 items-center">
            <div className=" rounded-full px-2 bg-[#E8E8FE] text-[#5B56EF]">
              Published: <span className="text-[16px]">{opportunity.published}</span>  Updated: <span className="text-[16px]">{opportunity.updated}</span>
            </div>
            <Image src={!isFavoriate ? BlackHeart : RedHeart} onClick={addFavoList}  className="animate-pulse hover:animate-none cursor-pointer" alt=""/>
        </div>
    </div>
  </div>
  </>;
};
export default OpportunityCard;
