import express from "express";
import booksRoute from "./books.route.js";
import userRoute from "./users.route.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to the API Library");
});

router.use("/books", booksRoute);
router.use("/users", userRoute);

export default router;
