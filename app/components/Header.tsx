"use client"
import Image from "next/image";
import Link from "next/link";
import Input from "./Input";
import dynamic from "next/dynamic";
import Button from "./Button";
import { useRouter } from "next/navigation";
interface HeaderPropsType {
  links?: Array<{label:string, path:string}>;
}
const Account = dynamic(()=>{
    return import ("./Account")
}, {ssr:false})
const Header: React.FC<HeaderPropsType> = ({ links }) => {
  const navigator = useRouter();
    const handleSearchClick = () => {
        // Handle search button click
        console.log("Search button clicked");
    };
  return (
    <>
      <div className="flex flex-row flex-wrap py-5 gap-8 sticky top-0 backdrop-blur-md rounded-full px-5">
        <div className="flex-[3] flex flex-row justify-between flex-wrap">
          <Image
            src={"/assets/global/logo.svg"}
            height={"100"}
            width={"100"}
            alt=""
          />
          <div className="flex flex-row">
            {links &&
              links.map((v, index) => {
                return (
                  <div key={index}>
                    <Link href={`${v.path}`} prefetch={true}>
                      <div className="py-2 hover:border-b-[1px] hover:scale-[1.1] hover:font-bold px-8 text-[16px] transition-all text-black  ">{v.label}</div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex-[2] flex flex-row justify-end flex-wrap gap-5 items-center">
            <Input image="search.svg" width="flex-[3]" placeholder="Search activities, locations..."/>
            <Button width="flex-1" variant="fill" color="#5B56EF" onClick={handleSearchClick}>
                Search
            </Button>
            <Account avatar={"/assets/global/defaultAvatar.svg"}/>
        </div>
      </div>
    </>
  );
};
export default Header;
