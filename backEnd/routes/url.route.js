import express from "express";
import { createUrl } from "../controllers/createUrl.controller.js";
import { getAllUrls } from "../controllers/getAllUrl.controller.js";

const router = express.Router();

router.post("/", createUrl);
router.get("/", getAllUrls);

export { router as url };
