"use client";
// import Layout from "@/app/components/Layout";
import MyOpportunityCard from "@/app/components/opportunities/MyOpportunityCard";
import EditModal, {
  OpportunityEditFormType,
} from "@/app/components/opportunities/EditModal";
import AddModal from "@/app/components/opportunities/AddModal";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import Select from "@/app/components/Select";
import { useState } from "react";
const Page: React.FC = () => {
  const now = Date.now().toLocaleString();
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const closeEditModal = () => {
    setIsEditModal(false);
  };
  const openEditModal = () => {
    setIsEditModal(true);
  };
  const [isAddModal, setIsAddModal] = useState<boolean>(false);
  const closeAddModal = () => {
    setIsAddModal(false);
  };
  const openAddModal = () => {
    setIsAddModal(true);
  };
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<OpportunityEditFormType>({
      name: "",
      type: "",
      from: "",
      to: "",
      amount: 0,
      _id:""
    });
  const navigator = useRouter();
  return (
    <div>
      <EditModal
        isShow={isEditModal}
        data={selectedOpportunity}
        closeModal={closeEditModal}
      />
      <AddModal isShow={isAddModal} closeModal={closeAddModal} />
      <div id="app" className=" flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <div className="w-[400px]">
            <Input
              image="search.svg"
              placeholder="Enter your opportunity name"
            />
          </div>
          <div className="w-[200px]">
            <Select
              options={[
                { label: "All", value: "" },
                { label: "Pending", value: "" },
                { label: "Rejected", value: "Accepted" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end w-[200px]">
          <Button variant="fill" color="#5B56EF" onClick={openAddModal}>
            + Add
          </Button>
        </div>
      </div>
      <div className="max-h-[600px] flex flex-row mt-5 flex-wrap gap-5 py-5 pl-5 border-l-[#5B56EF] border-l-[5px] overflow-y-auto border-[1px]">
        {[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 1, 1, 1, 1, 1,
          1,
        ].map((item, index) => {
          return (
            <div key={index}>
              <MyOpportunityCard
                onClick={(e) => {
                  navigator.push("/opportunities/asdfasdf/projects");
                }}
                onClickEdit={openEditModal}
                onClickDelete={() => {}}
                amount={300}
                name="XXXXXX"
                pic={"/assets/opportunities/default.png"}
                description="asdfasdfasdfasdfasdf"
                from={now}
                to={now}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
