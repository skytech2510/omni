import axios from "axios";
const GetAll = async () => {
    const res = await axios.get("/api/opportunity");
    if(res.status !== 200){
        return {message: "error"};
    }
    return res.data;
}
const FindOne = async (id: string) => {
  const res = await axios.get(`/api/opportunity?id = ${id}`);
  if(res.status !== 200){
    return {message: "error"};
  }
  return res.data;
}
const Add = async (data: any) => {
  const res = await axios.post("/api/opportunity", data);
  if (res.status !== 200) {
    return { message: "error" };
  }
  return res.data;
};
const Update = async (id: string, data: any) => {
  const res = await axios.put("/api/opportunity", { ...data, id: id });
  if (res.status !== 200) {
    return { message: "error" };
  }
  return res.data;
};
const Delete = async (id: string) => {
  const res = await axios.delete("/api/opportunity", {data: id});
};
export { Add, Update, Delete, GetAll };
