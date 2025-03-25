import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
} , {timestamps : true});

const plantModel = mongoose.model("plant" , plantSchema);

export default plantModel;