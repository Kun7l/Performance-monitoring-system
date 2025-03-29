import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/PMS");
        console.log("database connected sucessfully");
    }   
    catch(error){
        console.log("error in connecting database" , error);
    }
}

export default connectDB;