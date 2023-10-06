import express from "express";
import { createUser, deleteUser, updateUser } from "../controllers/user-controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";



const router = express.Router();

//create new User
router.post("/",verifyUser, createUser);

//update User details
router.put("/:id",verifyUser, updateUser);

// delete user details
router.delete("/:id",verifyAdmin, deleteUser);


export default router;