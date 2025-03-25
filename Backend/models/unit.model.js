import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    plantId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "plant",
    }
} , {timestamps : true});

const unitModel = mongoose.model("unit" , unitSchema);

export default unitModel;