import { connectDB } from "@/lib/mongodb";
import mongoose, { ObjectId } from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import Project, { ProjecDocument } from "@/models/Project";
import { Opportunity, User } from "@/models";
interface UserTempType {
  _id: ObjectId;
  name: string;
  email: string;
}
export const GET = async (req: NextRequest) => {
  const params = new URL(req.url).searchParams;
  const filter: {[key: string]:string} = {};
  params.forEach((val, key) => {
    filter[key] = val;

  });
  console.log(filter)
  await connectDB();
  try {
    if (mongoose.models.User) {
      const projects = await Project.find(filter)
        .populate("provider", "", User)
        .populate("opportunity", "", Opportunity)
        .exec();
      return NextResponse.json({ data: projects });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
};
export const POST = async (req: NextRequest) => {
  const data: ProjecDocument = await req.json();
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (token) {
    const project = await Project.insertMany([
      { ...data, provider: (token.user as UserTempType)._id },
    ]);
    return NextResponse.json(project);
  }
};
export const DELETE = async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get("id");
  const result = await Project.findByIdAndDelete(id);
  return NextResponse.json(result);
};
export const PUT = async (req: NextRequest) => {
  const data = await req.json();
  const id = data.id;
  delete data.id;
  const result = await Project.findByIdAndUpdate(id, data);
  return NextResponse.json(result);
  ///Update
};
