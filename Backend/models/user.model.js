import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ["plant operator" , "higher authority"],
        required : true,
    },
    plantId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "plant",
    },
    unitId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "unit",
    },
} , {timestamps : true});

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password , 10); 
}
  
userSchema.methods.verifyPassword = async function (password){
    return await bcrypt.compare(password , this.password);
}
  
userSchema.methods.generateToken = function (){
    const payload = {
      id : this._id,
    };
    return jwt.sign(payload , process.env.JWT_SECRET);
}

const userModel = mongoose.model("user" , userSchema);

export default userModel;