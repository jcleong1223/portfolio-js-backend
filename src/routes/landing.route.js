import express from "express";
import { getMySkills, getProjects, getProject, getMyCerts } from "../controllers/landing.controller.js";

const router = express.Router();

router.get("/projects", getProjects);
router.get("/my-skills", getMySkills);
router.get("/project/:id", getProject);
router.get("/my-certs", getMyCerts);

export default router;