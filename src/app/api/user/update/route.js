
import connectToDB from "@/database/db";
import AuthUser from "@/middlewire/authUser";

import User from "@/models/user";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { _id, name } = data;
      console.log(data)
      const updateUser = await User.findOneAndUpdate(
        {
          _id: _id,
        },
        {name},
        { new: true }

      );

      if (updateUser) {
        return NextResponse.json({
          success: true,
          message: "Address updated successfully!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "failed to update address ! Please try again",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
