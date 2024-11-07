import { Router, Response, Request } from "express"
import { getAllProducts } from "../controllers/productController"

const router = Router()

router.get("/api/products", getAllProducts)

export default router
