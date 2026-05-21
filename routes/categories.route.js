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
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id/books", getAllBooksByCategoryId);
router.get("/:id", getCategoryById);
router.post("/", categoryValidation, createCategory);
router.put("/:id", updateCategoryValidation, updateCategory);
router.delete("/:id", deleteCategory);

export default router;
