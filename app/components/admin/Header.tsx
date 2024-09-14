"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Account = dynamic(() => import("@/app/components/Account"), {
  ssr: false,
});
interface HeaderPropsType {}
const Header: React.FC<HeaderPropsType> = ({}) => {
  const navigator = useRouter();
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row flex-wrap gap-10">
        <Image
          src={"/assets/global/logo.svg"}
          height={"100"}
          width={"100"}
          alt=""
          className=" cursor-pointer"
          onClick={() => {
            navigator.push("/service");
          }}
        />
        <div className="text-[16px] flex flex-row items-center gap-5 flex-wrap">
          <Link
            href={"/service/opportunity"}
            prefetch
            className=" transition-all border-dashed border-[1px] px-5 border-transparent hover:border-b-[#454545] hover:text-[#5B56EF]"
          >
            Opportunity
          </Link>
          <Link
            href={"/service/project"}
            prefetch
            className=" transition-all border-dashed border-[1px] px-5 border-transparent hover:border-b-[#454545] hover:text-[#5B56EF]"
          >
            Project
          </Link>
        </div>
      </div>
      <div>
        <Account avatar={"/assets/global/defaultAvatar.svg"} />
      </div>
    </div>
  );
};
export default Header;
