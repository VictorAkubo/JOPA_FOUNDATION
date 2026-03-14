import mongoose from "mongoose"

const UserSchema =new mongoose.Schema({
  password:{
    required:true,
    type:String,
  },
  email:{
    unique:true,
    required:true,
    type:String,
  },
  name:{
    required:true,
    type:String,
  },
  order:[
    {
      id:String,
      name: String,
      price: Number,
      quantity: Number,
      img:String
    }
  ]
})

const AuthSchema = mongoose.model("Auth",UserSchema)
export default AuthSchema;