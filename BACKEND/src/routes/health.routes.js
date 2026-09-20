import express from "express"
import { monogo_health, render_health } from "../controller/health.controller.js"

const router = express.Router()

router.get("/render", render_health )
router.get("/mongo" , monogo_health)

export default router;