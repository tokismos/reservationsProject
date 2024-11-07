import axios from "axios"

const API_URL = "http://localhost:3000/api/reservations"

export const api = axios.create({
  baseURL: API_URL,
})

export const getAllReservations = async () => {
  try {
    const response = await api.get("/", {
      // headers: { Authorization: "Bearer aaaa" },
    })
    return response.data
  } catch (e) {
    console.log("AN ERROR", e)
  }
}
