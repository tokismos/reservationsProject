import { Reservation } from "@/types/reservation"
import { waitFor } from "@/utils"
import axios from "axios"

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/reservations"

export const api = axios.create({
  baseURL: API_URL,
})

type ListResponse = {
  success: boolean
  data: Reservation[]
}

type SingleResponse = {
  success: boolean
  data: Reservation
}

export const getAllReservations: () => Promise<ListResponse> = async () => {
  try {
    const response = await api.get("/")
    return response.data
  } catch (e) {
    console.log("Error has occured", e)
  }
}

export const getReservationById: (
  arg: string
) => Promise<SingleResponse> = async (id: string) => {
  try {
    const response = await api.get(`/${id}`)

    // THIS LINE IS JUST TO SIMULATE AN ASYNC DELAY
    await waitFor(200)

    return response.data
  } catch (e) {
    console.log("Error has occured", e)
  }
}
