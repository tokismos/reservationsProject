import { Reservation } from "@/types/reservation"
import axios from "axios"

const API_URL = "http://localhost:3000/api/reservations"

export const api = axios.create({
  baseURL: API_URL,
})

export const getAllReservations = async () => {
  try {
    const response = await api.get("/", {})
    return response.data
  } catch (e) {
    console.log("Error has occured", e)
  }
}
export const getReservationById = async (id: Reservation["reservationId"]) => {
  try {
    const response = await api.get(`/${id}`, {})
    return response.data
  } catch (e) {
    console.log("Error has occured", e)
  }
}
