import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://kunalkhairanar007:JlkvLZTqJFpf5ZUV@cluster0.jvsjg.mongodb.net/Performance-monitoring-system");
        console.log("database connected sucessfully");
    }   
    catch(error){
        console.log("error in connecting database" , error);
    }
}

export default connectDB;