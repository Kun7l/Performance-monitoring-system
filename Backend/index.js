import express from "express";
const app = express();
import connectDB from "./db.js";
await connectDB();
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import plantRoute from "./routes/plant.route.js";
import unitRoute from "./routes/unit.route.js";
import uploadRoute from "./routes/upload.route.js"

dotenv.config({});
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const corsOption = {
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow co  okies to be sent
    optionsSuccessStatus: 204,
};
app.use(cors(corsOption));

app.use("/user" , userRoute);
app.use("/plant" , plantRoute);
app.use("/unit" , unitRoute);
app.use("/upload",uploadRoute);



app.get("/" , (req,res)=>{
    res.send("hello");
})

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
})