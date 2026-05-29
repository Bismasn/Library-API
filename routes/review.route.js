import express from "express";
import {
  createReview,
  getBookReviews,
} from "../controllers/reviews.controller.js";
const router = express.Router();

import { reviewValidation } from "../validations/review.validation.js";

// Tinggal pasang reviewValidation di sini
router.get("/:id", getBookReviews);
router.post("/create", reviewValidation, createReview);

export default router;
