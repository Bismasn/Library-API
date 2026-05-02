import express from "express";

import {
  createBook,
  getBookById,
  getBooks,
  updateBook,
  deleteBook,
} from "../controllers/books.controller.js";

import {
  bookValidation,
  updateBookValidation,
} from "../validations/books.validation.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post('/', bookValidation, createBook)
router.put("/:id", updateBookValidation, updateBook)
router.delete("/:id", deleteBook);

export default router;
