import express from "express";
import { createCustomer } from "../controllers/customer-controller.js";


const router =express.Router();

//create new customer
router.post("/",createCustomer);

export default router;