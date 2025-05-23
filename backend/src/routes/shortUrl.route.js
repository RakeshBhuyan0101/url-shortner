import express from "express";
import { createCustomShortUrl, createShortUrl } from "../controllers/shortUrl.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/" , createShortUrl)


export default router