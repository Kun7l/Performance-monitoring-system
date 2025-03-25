import express from "express";

const router = express.Router();
import { unitRegister , fetchAllUnits} from "../controller/unit.controller.js";


router.post("/register" , unitRegister);
router.get("/get" , fetchAllUnits);



export default router;