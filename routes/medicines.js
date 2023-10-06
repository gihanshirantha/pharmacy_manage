import express from "express";
import { createMedicine, deleteMedicine, getAllMedicine, updateMedicine } from "../controllers/medicine-controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

//create new Mediccine Product
router.post("/",verifyUser,createMedicine);

//update medicine product
router.put("/:id",verifyUser, updateMedicine);

//delete medicine product
router.delete("/:id",verifyAdmin, deleteMedicine);

//get all medicine products
router.get("/",verifyUser,getAllMedicine);



export default router;