import { body, validationResult } from "express-validator";

// 1. Definisikan aturan validasi (seperti contohmu)
export const reviewValidation = [
  body("rating")
    .notEmpty()
    .withMessage("Rating is required")
    .isNumeric()
    .withMessage("Rating must be a number")
    .custom((value) => {
      // Validasi rating harus antara 1 dan 5
      if (value < 1 || value > 5) {
        throw new Error("Rating must be between 1 and 5");
      }
      return true;
    })
    .toInt(), // Mengubah input string menjadi integer otomatis

  body("comment")
    .isString()
    .withMessage("Comment must be a string")
    .notEmpty()
    .withMessage("Comment is required")
    .trim(),

  body("bookId")
    .notEmpty()
    .withMessage("Book ID is required")
    .isNumeric()
    .withMessage("Book ID must be a number")
    .toInt(),

  // 2. Middleware untuk mengecek apakah ada error dari aturan di atas
  (req, res, next) => {
    const errors = validationResult(req);

    // Jika ada error validasi, langsung stop di sini dan return error-nya
    if (!errors.isEmpty()) {
      return res.status(400).json({
        // Mengambil pesan error pertama saja agar rapi, atau bisa pakai errors.array()
        error: errors.array()[0].msg,
      });
    }

    next();
  },
];
