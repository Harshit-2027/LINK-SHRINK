import wrapAsync from "../utils/tryCatchWrapper.js"
import mongoose from "mongoose"

export const render_health = wrapAsync(async(req, res) => {
    res.status(200).json({
        status: "OK",
        service: "Render",
        time: new Date()
    })
})

export const monogo_health = wrapAsync(async (req, res) => {
    try {
        await mongoose.connection.db.admin().ping();

        res.status(200).json({
            status: "OK",
            database: "MongoDB Connected",
            time: new Date()
        })
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            database: "MongoDB Disconnected"
        })
    }
})
