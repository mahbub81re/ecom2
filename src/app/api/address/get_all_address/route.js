import connectToDB from "@/database/db";
import Address from "@/models/address";
import AuthUser from "@/middlewire/authUser";

import { NextResponse } from "next/server";
import { addRequestMeta } from "next/dist/server/request-meta";

export const dynamic = "force-dynamic";

export  async function GET(req){
 try{
    connectToDB();
    const {searchParams} = new URL(req.url) ;
    const id  = searchParams.get("id");
    console.log(id)
    if(!id){
        return NextResponse.json({
            success: false,
            message: "You are not logged In",
        })
    }else{
           const isAuthenticed = await AuthUser(req) ;
           if(isAuthenticed){
            const address =await Address.find({ userID: id });
            if(address){
                return NextResponse.json({
                    success: true,
                    data: address,
                })
            }else {
                return NextResponse.json({
                  success: false,
                  message: "failed to get addresses ! Please try again",
                });
              }
           }else {
            return NextResponse.json({
              success: false,
              message: "You are not authenticated",
            });
          }
        }
 }catch(err){
    return NextResponse.json({
        success: false,
        message: "Something went wrong ! Please try again later",
    })
 }
}