import express from "express";
import booksRoute from "./books.route.js";
import userRoute from "./users.route.js";
import profileRoute from "./profiles.route.js";
import categoryRoute from "./categories.route.js";
import borrowingsRoute from "./borrowing.route.js";
import authRoute from "./auth.route.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { authorizeAdmin } from "../middlewares/admin.middleware.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to the API Library");
});

router.use("/auth", authRoute);
router.use("/books", authenticateToken, booksRoute);
router.use("/users", authorizeAdmin, authenticateToken, userRoute);
router.use("/profiles", authorizeAdmin, authenticateToken, profileRoute);
router.use("/categories", authenticateToken, categoryRoute);
router.use("/borrowings", authorizeAdmin, authenticateToken, borrowingsRoute);

export default router;
