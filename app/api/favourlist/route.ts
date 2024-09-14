import { NextRequest, NextResponse } from "next/server";
import FavourList from "@/models/FavourList";
import { connectDB } from "@/lib/mongodb";
import { getToken } from "next-auth/jwt";
import { ObjectId } from "mongodb";

interface User {
  _id: ObjectId;
  name: string;
  email: string;
}
export const GET = async (req: NextRequest) => {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const filter = searchParams;
  console.log(filter);
  //return //All users
  const favourlist = await FavourList.find();
  return NextResponse.json(favourlist);
  // res.json({})
};
export const POST = async (req: NextRequest) => {
  //create New Opportunity
  const data = await req.json();
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const result = await FavourList.findOne({
    user: (token?.user as User)._id,
    "opportunity.title": data?.opportunity?.title,
  });
  if (result) {
    let a = await FavourList.deleteOne({
      user: (token?.user as User)._id,
      "opportunity.title": data?.opportunity?.title,
    });
    return NextResponse.json(a);
  } else {
    const opp = await FavourList.insertMany([
      { ...data, user: (token?.user as User)._id },
    ]);
    return NextResponse.json(opp);
  }
};
// export const DELETE = async (req: NextRequest) => {
//   const id = req.nextUrl.searchParams.get("id");
//   const result = await Opportunity.findByIdAndDelete(id);
//   return NextResponse.json(result);
// };
// export const PUT = async (req: NextRequest) => {
//   const data = await req.json();
//   const id = data.id;
//   delete data.id;
//   const result = await Opportunity.findByIdAndUpdate(id, data);
//   return NextResponse.json(result);
//   ///Update
// };
