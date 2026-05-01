import express from "express";
import {
  getAllCategories,
  createCategory,
  getAllBooksByCategoryId,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id/books", getAllBooksByCategoryId);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
