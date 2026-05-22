import express from "express";
import {
  getAllCategories,
  createCategory,
  getAllBooksByCategoryId,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";

import {
  categoryValidation,
  updateCategoryValidation,
} from "../validations//categories.validation.js";
import { authorizeAdmin } from "../middlewares/admin.middleware.js";
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id/books", getAllBooksByCategoryId);
router.get("/:id", getCategoryById);
router.post("/", authorizeAdmin, categoryValidation, createCategory);
router.put("/:id", authorizeAdmin, updateCategoryValidation, updateCategory);
router.delete("/:id", authorizeAdmin, deleteCategory);

export default router;
