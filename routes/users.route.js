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
import { authorizeAdmin } from "../middlewares/admin.middleware.js";
import { authorizeSelfOrAdmin } from "../middlewares/user-access.middleware.js";

router.get("/", authorizeAdmin, getUsers);
router.get("/:id", authorizeSelfOrAdmin, getUserById);
router.post("/create", userValidation, createUser);
router.put("/:id", updateUserValidation, updateUser);
router.delete("/:id", authorizeAdmin, deleteUser);

export default router;
