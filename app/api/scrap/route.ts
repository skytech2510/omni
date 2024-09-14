import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Data from "@/db/data.json";
import { Opportunity } from "@/models";
export const GET = async function (req: NextRequest) {
  await connectDB();
  await Opportunity.deleteMany({});
  const opportunities = await Opportunity.insertMany(Data);
  return NextResponse.json({ message: "success", data:opportunities });
};
