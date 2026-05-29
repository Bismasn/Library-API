import express from "express";
import {
  createProfile,
  getProfileById,
  getProfiles,
  updateProfile,
  deleteProfile,
} from "../controllers/profiles.controller..js";
import {
  profileValidation,
  updateProfileValidation,
} from "../validations/profiles.validation.js";
const router = express.Router();

router.get("/", getProfiles);
router.get("/:id", getProfileById);
router.post("/create", profileValidation, createProfile);
router.put("/:id", updateProfileValidation, updateProfile);
router.delete("/:id", deleteProfile);

export default router;
