import express from "express";
import {
  createReview,
  getBookReviews,
} from "../controllers/reviews.controller.js";
const router = express.Router();

// Tinggal pasang reviewValidation di sini
router.post("/", createReview);
router.get("/:id", getBookReviews);

export default router;
