import express from "express";
import {
  createProfile,
  getProfileById,
  getProfiles,
  updateProfile,
  deleteProfile,
} from "../controllers/profiles.controller..js";

const router = express.Router();

router.get("/", getProfiles);
router.get("/:id", getProfileById);
router.post("/", createProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;
