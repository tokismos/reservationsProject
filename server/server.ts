import express from "express"
import cors from "cors"
import productRoutes from "./routes/productRoutes"
const port = 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use("/", productRoutes)

app.listen(port, () => console.log("listening on port ", port))
