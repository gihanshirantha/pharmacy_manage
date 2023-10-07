import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomer,
} from "../controllers/customer-controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create new customer
router.post("/", createCustomer);

//Update Customer details
router.put("/:id", updateCustomer);

//Delete Customer
router.delete("/:id", deleteCustomer);

//get all customers
router.get("/", getAllCustomer);

//get single customer
router.get("/:id", getSingleCustomer);

export default router;
