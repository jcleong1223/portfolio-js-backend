import express from "express";
import { getMySkills, getProjects, getProject, getMyCerts } from "../controllers/landing.controller.js";
import { checkSecret } from "../middleware/checkSecret.middleware.js";

const router = express.Router();

router.get("/projects", checkSecret, getProjects);
router.get("/my-skills", checkSecret, getMySkills);
router.get("/project/:id", checkSecret, getProject);
router.get("/my-certs", checkSecret, getMyCerts);

export default router;