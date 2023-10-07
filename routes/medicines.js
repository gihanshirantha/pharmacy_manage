import express from "express";
import { createMedicine, deleteMedicine, getAllMedicine, getSingleMedicine, updateMedicine } from "../controllers/medicine-controller.js";


const router=express.Router();

//create new Mediccine Product
router.post("/",createMedicine);

//update medicine product
router.put("/:id", updateMedicine);

//delete medicine product
router.delete("/:id", deleteMedicine);

//get all medicine products
router.get("/",getAllMedicine);

//get single medicine product
router.get("/:id",getSingleMedicine);


export default router;