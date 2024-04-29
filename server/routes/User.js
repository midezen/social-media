import express from "express";
import { verifyToken } from "../verifyToken.js";
import { deleteUser, updateUser } from "../controllers/User.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
