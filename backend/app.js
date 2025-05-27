import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./src/config/mongoose.config.js"
import short_rul from "./src/routes/shortUrl.route.js"
import { redirectFromShortUrl } from "./src/controllers/shortUrl.controller.js"
import { errorHandler } from "./src/utils/errorHandler.js"
import userRoute from "./src/routes/user.route.js"
import { attachUser } from "./src/utils/attachUser.js"
import path from "path"

const app = express()
const __dirname = path.resolve()

dotenv.config("./.env")

app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(attachUser)

// API routes
app.use("/api/auth", userRoute)
app.use("/api/create", short_rul)

// Redirect route - must be after API routes
app.get("/s/:id", redirectFromShortUrl)

app.use(errorHandler)

if (process.env.NODE_ENV === "development") {
    const frontendPath = path.join(__dirname, "..", "frontend", "dist")
    app.use(express.static(frontendPath))

    app.get("*", (req, res) => {
      res.sendFile(path.join(frontendPath, "index.html"))
    })
}

app.listen(3000 , async() => {
    await connectDB()
    console.log("server is running on port 3000")
})