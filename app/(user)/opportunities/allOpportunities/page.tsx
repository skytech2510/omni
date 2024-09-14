"use client";
import OpportunityCard from "@/app/components/opportunities/oportunityCard";
import Input from "@/app/components/Input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { OpportunityDocument } from "@/models/Opportunity";
import { GetAll } from "@/actions/opportunity";
const Page: React.FC = () => {
  const now = Date.now().toLocaleString();
  const navigator = useRouter();
  const [opportunities, setOpportunities] = useState<(OpportunityDocument)[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const opportunities = await GetAll();
      setOpportunities(opportunities);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="w-[300px]">
        <Input image="search.svg" />
      </div>
      <div className="max-h-[600px] flex flex-row mt-5 flex-wrap gap-5 py-5 pl-5 border-l-[#5B56EF] border-l-[5px] overflow-y-auto border-[1px]">
        {opportunities.map((item, index) => {
          return (
            <div key={index}>
              <OpportunityCard
                opportunity={item}
                onClick={(e) => {
                  navigator.push(`/opportunities/allOpportunities/${index}`);
                }}
                pic={"/assets/opportunities/default.png"}
                description={"sssss"}
                isFavoriate={item.favourite}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
