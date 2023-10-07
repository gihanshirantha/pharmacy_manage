import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/user-controller.js";

const router = express.Router();

//create new User
router.post("/", createUser);

//update User details
router.put("/:id", updateUser);

// delete user details
router.delete("/:id", deleteUser);

//get all users
router.get("/", getAllUser);

// get single user details
router.get("/:id", getSingleUser);

export default router;
