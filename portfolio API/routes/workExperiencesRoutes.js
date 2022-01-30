import express from "express";
import { createWorkExperience, deleteWorkExperience, editWorkExperience, getAllWorkExperiences, getWorkExperience } from "../controllers/workExperiencesCtrl.js";

const router = express.Router();

router.get('/', getAllWorkExperiences);
router.post('/', createWorkExperience);
router.get("/:workExperienceId", getWorkExperience);
router.put("/:workExperienceId", editWorkExperience);
router.delete("/:workExperienceId", deleteWorkExperience);

export default router;