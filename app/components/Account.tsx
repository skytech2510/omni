import Image, { StaticImageData } from "next/image";
import defaultCover from "@/public/assets/global/defaultCover.webp";
import defaultAvatar from "@/public/assets/global/defaultAvatar1.webp";
import Link from "next/link";
import { useState } from "react";
interface AccountPropsType {
  avatar: StaticImageData | string;
}
const Account: React.FC<AccountPropsType> = ({ avatar }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleToggle = () => {
    setIsShow((isShow) => !isShow);
  };
  return (
    <div className="w-fit rounded-full relative z-[100]">
      <Image
        src={avatar}
        width={50}
        height={50}
        className=" shadow-md rounded-full cursor-pointer"
        alt=""
        onClick={handleToggle}
      />
      {isShow && (
        <div className=" rounded-lg shadow-lg w-[300px] absolute left-[-250px] bg-[white] pb-5 animate-[wiggle_s_ease-in-out_infinite]">
          <div className="h-[100px] overflow-y-clip relative">
            <Image
              src={defaultCover}
              width={100}
              height={100}
              alt=""
              className="w-full rounded-lg "
            />
          </div>
          <Image
            src={defaultAvatar}
            width={100}
            height={100}
            alt=""
            className=" shadow-lg absolute top-0 right-[50%] translate-x-[50%] rounded-full translate-y-[60%]"
          />
          <div className="flex flex-row flex-wrap justify-between mt-20 px-[60px] items-center gap-5">
            <Image
              src={"/assets/icons/edit1.svg"}
              width={40}
              height={40}
              alt=""
            />
            <Image
              src={"/assets/icons/logout.svg"}
              width={40}
              height={40}
              alt=""
            />
            <Image
              src={"/assets/icons/send.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-3 px-[60px] mt-8 text-[16px]">
            <Link
              href={"#"}
              className=" decoration-dashed decoration-[1px] decoration-[#454545] hover:underline"
            >
              My Opportunities
            </Link>
            <Link
              href={"#"}
              className=" decoration-dashed decoration-[1px] decoration-[#454545] hover:underline"
            >
              My Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Account;
