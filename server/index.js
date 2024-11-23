import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()
const PORT = 9090
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

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})