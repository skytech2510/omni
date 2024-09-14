"use client";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FabButton from "@/app/components/FabButton";
import deleteIcon from "@/public/assets/icons/delete.svg";
import visibleIcon from "@/public/assets/icons/visible.svg";
import editIcon from "@/public/assets/icons/edit.svg";
import nextIcon from "@/public/assets/icons/next.svg";
import previousIcon from "@/public/assets/icons/previous.svg";
import { useParams, usePathname, useRouter } from "next/navigation";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { GetAll } from "@/actions/project";
const Page: React.FC = () => {
  const navigator = useRouter();
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const [items, setItems] =useState<Array<any>>([]);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  const { id } = useParams();
  const path = usePathname();
  const handleRouter = (id: string) => {
    navigator.push(path + "/" + id);
  };
  useEffect(() => {
    const fechData = async () => {
      const filter = {opportunity:id}
      let data = await GetAll(filter);
      setItems(data);
    };
    fechData();
  }, []);
  return (
    <>
      <div className="flex flex-row justify-between ">
        <Input
          image="search.svg"
          width="w-[500px]"
          placeholder="Enter your project name"
        />
        <Button
          variant="fill"
          color="#5B56EF"
          onClick={() => {
            navigator.push("/opportunities/asdfasdf/add");
          }}
          width="w-[200px]"
        >
          + Add
        </Button>
      </div>
      <div className=" flex flex-col mt-5">
        <div className="flex flex-col">
          {currentItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center justify-between px-10 py-5 border-b-[1px]"
              >
                <div className="flex flex-row gap-[130px]">
                  <Image
                    src={"/assets/projects/default.png"}
                    width={70}
                    height={70}
                    alt=""
                  />
                  <div className=" flex flex-col gap-5 justify-center text-left">
                    <div>ID : {item?._id}</div>
                    <div>Opportunity: {item?.opportunity?.title}</div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 justify-end">
                  <FabButton
                    onClick={(e) => {
                      navigator.push(`/opportunities/${item?._id}/edit`);
                    }}
                    icon={editIcon}
                  />
                  <FabButton icon={deleteIcon} />
                  <FabButton
                    onClick={(e) => {
                      handleRouter("232323");
                    }}
                    icon={visibleIcon}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5">
          {/* <Pagination/> */}
          <ReactPaginate
            className="flex flex-row justify-end items-center gap-5"
            nextLabel={
              <div>
                <Image src={nextIcon} width={20} height={20} alt="" />
              </div>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={
              <>
                <Image src={previousIcon} width={20} height={20} alt="" />
              </>
            }
            // containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            // previousLinkClassName="page-link"
            nextClassName="page-item"
            // nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      </div>
    </>
  );
};
export default Page;
