import express from "express";

const router = express.Router();
import { unitRegister , fetchAllUnits , getUnitsByPlantId , getAllUnitsByUserId} from "../controller/unit.controller.js";
import auth from "../middleware/auth.js";

router.post("/register" , unitRegister);
router.get("/get" , fetchAllUnits);
router.get("/get/:id" ,getUnitsByPlantId);
router.get("/user/get", auth , getAllUnitsByUserId);



export default router;