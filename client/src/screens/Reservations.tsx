import { AccordionReservation } from "@/components/AccordionReservation"
import { SearchInput } from "@/components/SearchInput"
import { useGetReservations } from "@/hooks/useGetReservations"

export const Reservations = () => {
  const { data: products, isLoading } = useGetReservations()

  if (isLoading) return <div> LOADING .....</div>

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <SearchInput />
      <h2 className="text-2xl font-bold mb-6">Reservations</h2>
      <AccordionReservation products={products} />
    </div>
  )
}
