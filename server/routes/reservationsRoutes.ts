import { Router, Response, Request } from "express"
import { getAllReservations } from "../controllers/reservationController"

const router = Router()

router.get("/api/reservations", getAllReservations)

export default router
