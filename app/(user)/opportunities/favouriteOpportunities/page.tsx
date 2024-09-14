"use client";
import Layout from "@/app/components/Layout";
import FavouriteOpportunityCard from "@/app/components/opportunities/favouriteOpportunityCard";
import Input from "@/app/components/Input";
import { useRouter } from "next/navigation";
import { FavourListDocument } from "@/models/FavourList";
import { useEffect, useState } from "react";
import { GetAll } from "@/actions/favourList";
const Page: React.FC = () => {
  const now = Date.now().toLocaleString();
  const navigator = useRouter();
  const [favourList, setFavourList] = useState<FavourListDocument[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const favourList = await GetAll();
      setFavourList(favourList);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="w-[300px]">
        <Input image="search.svg" />
      </div>
      <div className="max-h-[600px] flex flex-row mt-5 flex-wrap gap-5 py-5 pl-5 border-l-[#5B56EF] border-l-[5px] overflow-y-auto border-[1px]">
        {favourList.length > 0 && favourList.map((item, index) => {
          return (
            <div key={index}>
              <FavouriteOpportunityCard
                onClick={(e) => {
                  navigator.push(`/opportunities/${item.opportunity._id}/projects`);
                }}
                amount={300}
                name={item.opportunity.title}
                pic={"/assets/opportunities/default.png"}
                description="asdfasdfasdfasdfasdf"
                from={item.opportunity.published}
                to={item.opportunity.updated}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
