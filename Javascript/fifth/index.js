import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import router from "./routes/userRoutes.js"

dotenv.config() // Load environment variables from .env file

await connectDB() // Connect to MongoDB
app.use('/', router);

const app = express()

app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is healthy" })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

export default app;