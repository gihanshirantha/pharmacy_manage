import express from "express";
import {
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customer-controller.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create new customer
router.post("/",verifyUser, createCustomer);

//Update Customer details
router.put("/:id", updateCustomer);

//Delete Customer
router.delete("/:id", deleteCustomer);

export default router;
