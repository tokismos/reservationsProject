import { getReservationById } from "@/services/api"
import { Reservation } from "@/types/reservation"
import { useQuery } from "@tanstack/react-query"

export const useGetReservationById = (id: Reservation["reservationId"]) => {
  return useQuery({
    queryKey: ["getReservation", id],
    queryFn: () => getReservationById(id),
    select: ({ data }) => data,
    enabled: !!id,
  })
}
