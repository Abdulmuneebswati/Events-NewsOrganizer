import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  
export const Admins = mongoose.model('User', adminSchema);


export const findAdminByEmail = async(email)=>{
    return await  Admins.findOne({ email });
}

