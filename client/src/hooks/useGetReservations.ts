import { getAllReservations } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

export const useGetReservations = () => {
  return useQuery({
    queryKey: ["getAllReservations"],
    queryFn: getAllReservations,
    select: ({ data }) => data,
  })
}
