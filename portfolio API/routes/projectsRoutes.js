import express from "express";
import { createProject, deleteProject, editProject, getAllProjects, getProject } from "../controllers/projectsCtrl.js";

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', createProject);
router.get("/:projectId", getProject);
router.put("/:projectId", editProject);
router.delete("/:projectId", deleteProject);

export default router;