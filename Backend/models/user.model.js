import mongoose from "mongoose";

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

const userModel = mongoose.model("user" , userSchema);