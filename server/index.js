import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"

dotenv.config({})

const app = express()
const PORT = process.env.PORT || 9090
const corsOptions = {
  origin: "http://localhost:5173/",
  credentials: true
}

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors(corsOptions))

app.post("/test", (req, res) => {
  return res.status(200).json({
    message: "Test OK",
    success: true
  });
})

//apis

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`)
})