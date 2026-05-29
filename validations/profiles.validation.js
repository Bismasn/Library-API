import { body } from "express-validator";

// Validasi untuk membuat profil baru (semua field wajib diisi)
export const profileValidation = [
  body("userId")
    .isInt()
    .withMessage("User ID must be an integer")
    .notEmpty()
    .withMessage("User ID is required"),
  body("address")
    .isString()
    .withMessage("Address must be a string")
    .notEmpty()
    .withMessage("Address is required"),
  body("phone")
    .isString()
    .withMessage("Phone must be a string")
    .notEmpty()
    .withMessage("Phone is required")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 and 15 characters"),
];

// Validasi untuk update profil (field bersifat opsional)
export const updateProfileValidation = [
  body("userId").optional().isInt().withMessage("User ID must be an integer"),
  body("address").optional().isString().withMessage("Address must be a string"),
  body("phone")
    .optional()
    .isString()
    .withMessage("Phone must be a string")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 and 15 characters"),
];
