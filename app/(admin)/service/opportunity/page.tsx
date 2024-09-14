"use client";
import dynamic from "next/dynamic";
import SubHeadder from "@/app/components/admin/opportunity/SubHeader";
import { useEffect, useState } from "react";
import { GetAll } from "@/actions/opportunity";
import { ObjectId } from "mongoose";
import { OpportunityDocument } from "@/models/Opportunity";
const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});
const Page: React.FC = () => {
  const columns = [
    {
      name: "ID",
      selector: (row: any) => row._id,
    },
    {
      name: "Title",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "Published",
      selector: (row: any) => row.published,
      sortable: true,
    },
    {
      name: "Updated",
      selector: (row: any) => row.updated,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
  ];
  const [opportunities, setOpportunities] = useState<OpportunityDocument[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<OpportunityDocument>({
    title: "",
    published: "",
    updated: "",
    info:"",
    socialLinks: [],
    _id:"",
    status:"visible",
    favourite:false
  });
  useEffect(() => {
    const fetchData = async () => {
      const opportunities = await GetAll();
      setOpportunities(opportunities);
    };
    fetchData();
  }, []);
  return (
    <div id="app">
      {/* {selectedRow && (
        <EditModal
          isShow={isEditModal}
          data={selectedRow}
          closeModal={() => {
            setIsEditModal(false);
          }}
        />
      )} */}
      {/* <AddModal
        isShow={isAddModal}
        closeModal={() => {
          setIsAddModal(false);
        }}
      /> */}
      <DataTable
        columns={columns}
        data={opportunities}
        pagination
        selectableRows
        selectableRowsSingle
        onSelectedRowsChange={(e) => {
          setSelectedRow(e.selectedRows[0] as OpportunityDocument);
          setIsEdit(e.selectedCount === 1);
        }}
        // actions={<button>Add</button>}
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <SubHeadder
            isEdit={isEdit}
          />
        }
      />
    </div>
  );
};
// export async function getServerSideProps(){
//   const opportunities = await GetAll();
//   return {
//     props:{
//       opportunities
//     }
//   }
// }
export default Page;
