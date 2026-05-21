import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

import {
  userValidation,
  updateUserValidation,
} from "../validations/users.validation.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/",userValidation, createUser);
router.put("/:id",updateUserValidation, updateUser);
router.delete("/:id", deleteUser);

export default router;
