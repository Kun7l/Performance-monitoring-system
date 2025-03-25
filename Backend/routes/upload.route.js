import express from "express";
const router = express.Router();

import multer, { memoryStorage } from "multer";
const upload = multer({ storage: multer.memoryStorage() });

import excelParse from "../middleware/excelParse.js"
import { UploadData } from "../controller/upload.controller.js";

router.post("/", upload.single("file"), excelParse, UploadData);

export default router;
