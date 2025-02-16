import express from "express";
import { createUrl } from "../controllers/createUrl.controller.js";
import { deleteUrlByIdentifier } from "../controllers/deleteUrl.controller.js";
import { getAllUrls } from "../controllers/getAllUrl.controller.js";
import { redirectUrl } from "../controllers/redirectUrl.controller.js";

const router = express.Router();

// Create a new URL entry – using POST /create
router.post("/create", createUrl);

// Retrieve all URL entries – GET /all
router.get("/all", getAllUrls);

// Redirection – expects either a customUrl or defaultId in the URL parameter
router.get("/:customUrl", redirectUrl);

// Deletion – delete a URL using the identifier (customUrl or defaultId)
router.delete("/:customUrl", deleteUrlByIdentifier);

export { router as redirecto };
