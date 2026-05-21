import express from "express";

import {
  createBorrowing,
  getBorrowingById,
  getAllBorrowings,
  returnBook,
  deleteBorrowing,
} from "../controllers/borrowings.controller.js";

import { borrowingValidation } from "../validations/borrowings.validation.js";

const router = express.Router();

router.get("/", getAllBorrowings);
router.get("/:id", getBorrowingById);
router.post("/", borrowingValidation, createBorrowing);
router.put("/:id", returnBook);
router.delete("/:id", deleteBorrowing);

export default router;
