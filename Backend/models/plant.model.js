import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
})

const plantModel = mongoose.model("plant" , plantSchema);

export default plantModel;