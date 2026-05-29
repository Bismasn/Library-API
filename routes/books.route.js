import express from "express";

import {
  createBook,
  getBookById,
  getBooks,
  getBookStatus,
  updateBook,
  deleteBook,
} from "../controllers/books.controller.js";

import {
  bookValidation,
  updateBookValidation,
} from "../validations/books.validation.js";
import { authorizeAdmin } from "../middlewares/admin.middleware.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.get("/:id/status", getBookStatus);
router.post(
  "/create",
  authorizeAdmin,
  upload.single("cover"),
  bookValidation,
  createBook,
);
router.put(
  "/:id",
  authorizeAdmin,
  upload.single("cover"),
  updateBookValidation,
  updateBook,
);
router.delete("/:id", authorizeAdmin, deleteBook);

export default router;
