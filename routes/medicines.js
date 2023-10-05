import express from "express";
import { createMedicine } from "../controllers/medicine-controller.js";

const router=express.Router();

//create new Mediccine Product
router.post("/",createMedicine);



export default router;