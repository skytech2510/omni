import { makeQuery } from "@/utiles/general";
import axios from "axios";
const GetAll = async (query?: Object) => {
  let filter = "";
  if (query) filter = makeQuery(query);
  const res = await axios.get(`/api/project?${filter}`);
  if (res.status !== 200) {
    return { message: "error" };
  }
  return res.data.data;
};
const Add = async (data: any) => {
  const files = [];
  if (data?.files?.length > 0) {
    const formData = new FormData();
    data?.files?.forEach((file: any) => {
      formData.append("files", file);
    });
    const res = await axios.post("/api/upload", formData);
    if (res.status !== 200) {
      return { message: "error" };
    } else {
      files.push(...res.data.data);
      data.data = { ...data.data, files: files };
    }
  }
  const res = await axios.post("/api/project", data.data);
  if (res.status !== 200) {
    return { message: "error" };
  }
  return res.data;
};
const Update = async (id: string, data: any) => {
  const res = await axios.put("/api/project", { ...data, id: id });
  if (res.status !== 200) {
    return { message: "error" };
  }
  return res.data;
};
const Delete = async (id: string) => {
  const res = await axios.delete("/api/project", { data: id });
};
export { Add, Update, Delete, GetAll };
