import { useGetProducts } from "@/hooks/useGetProducts"
import { AccordionReservation } from "@/components/AccordionReservation"

export const Products = () => {
  const { data: products } = useGetProducts()

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Reservations</h2>
      <AccordionReservation products={products} />
    </div>
  )
}
