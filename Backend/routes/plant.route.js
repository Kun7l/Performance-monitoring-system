import express from "express";

const router = express.Router();
import { plantRegister } from "../controller/plant.controller.js";

router.post("/register" , plantRegister);






export default router;