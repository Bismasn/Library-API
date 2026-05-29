import express from "express";

import {
  createBorrowing,
  getBorrowingById,
  getAllBorrowings,
  returnBook,
  deleteBorrowing,
} from "../controllers/borrowings.controller.js";

import { borrowingValidation } from "../validations/borrowings.validation.js";
import { authorizeAdmin } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.get("/", getAllBorrowings);
router.get("/:id", getBorrowingById);
router.post("/create", borrowingValidation, createBorrowing);
router.put("/return/:id", authorizeAdmin, returnBook);
router.delete("/:id", deleteBorrowing);

export default router;
