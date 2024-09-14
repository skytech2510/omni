import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
export const POST = async function (req: NextRequest, res: NextResponse) {
  const data = await req.json();
  let isConnected = await connectDB();
  if (isConnected) {
    const users = await User.find({ email: data.email });
    if(users.length > 0) {
      return NextResponse.json({
        message: "Email already exists",
      });
    }
    else {
        console.log(data)
      const user = await User.create(data);
      return NextResponse.json({
        message: "User created successfully",
        user,
      });
    }
  }
};
