import express from "express";
const app = express();
import connectDB from "./db.js";
await connectDB();




const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
})