import Image from "next/image"
const Welcome: React.FC = () => {
    return <>
    <div className=" w-full flex flex-row justify-center items-center translate-y-[200px]">
        <div className="flex flex-col gap-10">
            <Image src={"/assets/global/logo.svg"} width={200} height={200} alt="" className=" animate-ping self-center"/>
            <div className=" animate-pulse text-[32px] bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
                Welcome to coming our website!
            </div>
        </div>
    </div>
    </>
}
export default Welcome