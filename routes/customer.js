import express from "express";
import {
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customer-controller.js";

const router = express.Router();

//create new customer
router.post("/", createCustomer);

//Update Customer details
router.put("/:id", updateCustomer);

//Delete Customer
router.delete("/:id", deleteCustomer);

export default router;
