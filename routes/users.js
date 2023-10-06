import express from "express";
import { createUser, deleteUser, updateUser } from "../controllers/user-controller.js";



const router = express.Router();

//create new User
router.post("/", createUser);

//update User details
router.put("/:id",updateUser);

// delete user details
router.delete("/:id",deleteUser);


export default router;