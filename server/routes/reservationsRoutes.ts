import { Router, Response, Request } from "express"
import {
  getAllReservations,
  getReservationById,
} from "../controllers/reservationController"

const router = Router()

router.get("/api/reservations", getAllReservations)

router.get("/api/reservations/:id", getReservationById)

export default router
