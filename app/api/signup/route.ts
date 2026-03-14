import {NextResponse} from "next/server"
import AuthSchema from "../../../models/Users"

let userauth = []

export async function POST(req){
 try{
    const body = await req.json()
  const {email,name,password} = body; 
  const createdUser = await AuthSchema.create({name,email,password})
  userauth.push({name,email,password})
  return NextResponse.json({
    status:201,
    message : "user created successfully",
    user:createdUser,
    count:userauth.length
  })
 }catch(error){
   return NextResponse.json({
     message:error.message
   })
 }
}
