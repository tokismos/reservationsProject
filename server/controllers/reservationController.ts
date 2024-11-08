import { getReservation, getReservations } from "../models/ReservationModel"
import { Request, Response } from "express"

export const getAllReservations = (req: Request, res: Response) => {
  try {
    const reservations = getReservations()

    res.json({
      success: true,
      data: reservations,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message,
    })
  }
}

export const getReservationById = async (req, res) => {
  try {
    const reservationId = req.params.id

    const reservation = getReservation(reservationId)

    if (!reservation) {
      return res.status(404).json({
        success: false,
        error: "Reservation not found",
        message: `No reservation found with ID: ${reservationId}`,
      })
    }

    res.json({
      success: true,
      data: reservation,
    })
  } catch (error) {
    console.error("Error fetching reservation:", error)
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    })
  }
}
