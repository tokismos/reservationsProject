import { ReservationsTable } from "@/components/ReservationsTable"
import { useGetReservations } from "@/hooks/useGetReservations"

export const Reservations = () => {
  const { data: reservations, isLoading, error } = useGetReservations()

  if (isLoading) return <div> LOADING .....</div>
  if (error) return <div> An error has occured</div>

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <ReservationsTable reservations={reservations} />
    </div>
  )
}
