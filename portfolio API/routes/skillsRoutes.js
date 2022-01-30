import express from "express";
import { createSkill, deleteSkill, editSkill, getAllSkills, getSkill } from "../controllers/skillsCtrl.js";

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', createSkill);
router.get("/:skillId", getSkill);
router.put("/:skillId", editSkill);
router.delete("/:skillId", deleteSkill);

export default router;