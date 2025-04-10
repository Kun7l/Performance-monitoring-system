import express from "express";

const router = express.Router();
import { plantRegister , getAllPlants} from "../controller/plant.controller.js";

router.post("/register" , plantRegister);
router.get("/get" , getAllPlants);






export default router;