import Image, { StaticImageData } from "next/image";

interface ContactsPropsType {
  items: Array<{ icon: string; path: string }>;
}
const Contacts: React.FC<ContactsPropsType> = ({items}) => {
  return <div className=" w-fit p-3 rounded-full border-[#5B56EF] border-[1px] flex flex-row gap-5">
    {items && items.map((item, index) => {
        return <div key={index}>
            <a href={item.path}><Image src={`/assets/icons/${item.icon}.svg`} width={30} height={30} alt="icon"/></a>
        </div>
    })}
  </div>;
};
export default Contacts;
