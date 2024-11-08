import { AccordionReservation } from "@/components/AccordionReservation"
import { SearchInput } from "@/components/SearchInput"
import { useGetReservationById } from "@/hooks/useGetReservationById"
import { useGetReservations } from "@/hooks/useGetReservations"

export const Reservations = () => {
  const { data: reservations, isLoading, error } = useGetReservations()
  // const { data: reservationById, isLoading: isReservationByIdLoading } =
  //   useGetReservationById()

  if (isLoading) return <div> LOADING .....</div>
  if (error) return <div> LOADING .....</div>

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <SearchInput />
      <h2 className="text-2xl font-bold mb-6">Reservations</h2>
      <AccordionReservation products={reservations} />
    </div>
  )
}
