import express from "express";
import { createMedicine, updateMedicine } from "../controllers/medicine-controller.js";

const router=express.Router();

//create new Mediccine Product
router.post("/",createMedicine);

//update medicine product
router.put("/:id",updateMedicine);



export default router;