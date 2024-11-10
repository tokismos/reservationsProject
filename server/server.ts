import express from "express"
import cors from "cors"
import reservationRoutes from "./routes/reservationsRoutes.js"
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use("/", reservationRoutes)

app.listen(port, () => console.log("listening on port ", port))
