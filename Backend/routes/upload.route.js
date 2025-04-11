import express from "express";
const router = express.Router();

import multer, { memoryStorage } from "multer";
const upload = multer({ storage: multer.memoryStorage() });

import excelParse from "../middleware/excelParse.js"

import { UploadData , uploadDataManually} from "../controller/upload.controller.js";

router.post("/", upload.single("file"), excelParse, UploadData);
router.post("/manual" , uploadDataManually);


export default router;
