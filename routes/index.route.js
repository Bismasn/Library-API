import express from "express";
import booksRoute from "./books.route.js";
import userRoute from "./users.route.js";
import profileRoute from "./profiles.route.js";
import categoryRoute from "./categories.route.js";
import borrowingsRoute from "./borrowing.route.js";
import authRoute from "./auth.route.js";
import reviewRoute from "./review.route.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { authorizeAdmin } from "../middlewares/admin.middleware.js";
import logger from "../config/logger.config.js";

const router = express.Router();

router.get("/", (req, res) => {
  logger.debug("GET / - Welcome route");
  res.send("Welcome to the API Library by Bisma Semara (ig: @Biisma_sn)");
});

router.use((req, res, next) => {
  logger.debug(
    { method: req.method, path: req.path, ip: req.ip },
    "incoming request",
  );
  next();
});

router.use("/auth", authRoute);
router.use("/books", authenticateToken, booksRoute);
router.use("/categories", authenticateToken, categoryRoute);
router.use("/reviews", authenticateToken, reviewRoute);
router.use("/users", authenticateToken, userRoute);
router.use("/profiles", authenticateToken, authorizeAdmin, profileRoute);
router.use("/borrowings", authenticateToken, borrowingsRoute);

export default router;
