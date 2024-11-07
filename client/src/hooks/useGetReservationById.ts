import { getReservationById } from "@/services/api"
import { Reservation } from "@/types/product"
import { useQuery } from "@tanstack/react-query"

export const useGetReservationById = (id: Reservation["reservation_uuid"]) => {
  return useQuery({
    queryKey: ["getReservation", id],
    queryFn: () => getReservationById(id),
    select: ({ data }) => data,
    enabled: !!id,
  })
}
