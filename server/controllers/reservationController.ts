import { getReservations } from "../models/ReservationModel"

export const getAllReservations = async (req, res) => {
  try {
    const summaryData = await getReservations()

    res.json({
      success: true,
      data: summaryData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message,
    })
  }
}
