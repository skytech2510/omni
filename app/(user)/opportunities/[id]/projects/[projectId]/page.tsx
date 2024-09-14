"use client";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import Button from "@/app/components/Button";
import FileItem from "@/app/components/opportunities/FileItem";
const Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-[105px]">
        <div className=" rounded-xl w-full h-[200px] overflow-hidden shadow-2xl">
          <Image
            src={"/assets/opportunities/cover.webp"}
            width={400}
            height={400}
            className=" w-full"
            alt=""
          />
        </div>
        <div className=" flex flex-row flex-wrap gap-5">
          <div className="flex-[3] flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className=" border-b-[1px]">
                <div className=" border-b-4 border-b-[#5B56EF] w-fit px-5 text-[16px]">
                  Description
                </div>
              </div>
              <div className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est
                neque totam perferendis quos eaque nesciunt assumenda impedit
                non quidem omnis, ad, cupiditate maiores ipsam culpa sequi a
                modi mollitia.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className=" flex-[2] flex flex-col">
                  <div className="py-5 border-b-[1px] border-b-[#454545] flex flex-row items-center justify-between">
                    <Image
                      src={"/assets/icons/title.svg"}
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className=" text-right text-[#404040] text-[30px]">
                      Lorern ipsum
                    </div>
                  </div>
                  <div className="py-5 border-b-[1px] border-b-[#454545] flex flex-row items-center justify-between">
                    <Image
                      src={"/assets/icons/from.svg"}
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className=" text-right text-[#404040] text-[30px]">
                      08/24/2024
                    </div>
                  </div>
                  <div className="py-5 border-b-[1px] border-b-[#454545] flex flex-row items-center justify-between">
                    <Image
                      src={"/assets/icons/to.svg"}
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className=" text-right text-[#404040] text-[30px]">
                      08/24/2024
                    </div>
                  </div>
                  <div className="py-5 border-b-[1px] border-b-[#454545] flex flex-row items-center justify-between">
                    <Image
                      src={"/assets/icons/status.svg"}
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className=" text-right text-[#404040] text-[30px]">
                      Finished
                    </div>
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="rounded-lg border-[#5B56EF] border-[1px] py-[30px] flex flex-col gap-5">
              <div className="flex flex-row justify-center">
                <Image
                  src={"/assets/opportunities/cover.webp"}
                  width={100}
                  height={100}
                  className=" w-[263px] h-[263px]  rounded-lg"
                  alt=""
                />
              </div>
              <div className="text-center text-[24px]">
                Support Company Support Company
              </div>
              <div className="text-[18px] opacity-40 text-center">
                Support Company
              </div>
            </div>
            <div className="rounded-lg flex flex-col border-[#5B56EF] border-[1px] py-[30px] px-6 text-center gap-5">
              <div className="text-[24px]">Additional Files</div>
              <hr></hr>
              <div className="flex flex-col gap-[30px]">
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return (
                    <div key={index}>
                      <FileItem filename="Document.pdf" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <Button onClick={() => {}} variant="outline" color="#5B56EF">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
