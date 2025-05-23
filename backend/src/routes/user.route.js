import express from "express"
import { getAllUrls, logout, signin, signup } from "../controllers/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/signup" , signup)
router.post("/signin" , signin)
router.get("/logout" , logout)
router.get("/all-urls" , authMiddleware, getAllUrls)

export default router