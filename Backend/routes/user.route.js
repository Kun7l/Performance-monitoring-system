import express from "express";
const router = express.Router();
import { userLogin , userRegister , removePlantOperator} from "../controller/user.controller.js";

router.post("/register" , userRegister);
router.post("/login" , userLogin);
router.post("/plant-operator/remove/:id" , removePlantOperator);



export default router;