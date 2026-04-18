import express from "express";
import booksRoute from "./books.route.js";
import userRoute from "./users.route.js";
import profileRoute from "./profiles.route.js";
// import categoryRoute from "./categories.route.js";
import borrowingsRoute from "./borrowing.route.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to the API Library");
});

router.use("/books", booksRoute);
router.use("/users", userRoute);
router.use("/profiles", profileRoute);
// router.use("/categories", categoryRoute);
router.use("/borrowings", borrowingsRoute);

export default router;
