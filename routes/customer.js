import express from "express";
import {
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customer-controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create new customer
router.post("/",verifyUser, createCustomer);

//Update Customer details
router.put("/:id",verifyUser, updateCustomer);

//Delete Customer
router.delete("/:id",verifyAdmin, deleteCustomer);

export default router;
