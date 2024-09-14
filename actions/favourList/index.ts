import { OpportunityDocument } from "@/models/Opportunity";
import axios from "axios";
const addToList = async (opportunity: OpportunityDocument) => {
  const res = await axios.post("/api/favourlist", { opportunity: opportunity });
  return res;
};
const GetAll = async (query:Array<any> = []) => {
    let filter = "";
  // Object.entries(query).forEach(([key, value]) =>{
  //   filter += `${key}=${value}&`;
  // })
  const res = await axios.get(`/api/favourlist?${filter}`);
  console.log(res)
  if (res.status !== 200) {
    return { message: "error" };
  }
  return res.data;
};
export { addToList, GetAll };
