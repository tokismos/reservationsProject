import { Product } from "./product"

interface ReservationSummary {
  nbrOfActivePurchases: number
  sumActiveCharges: number
}

export interface Reservation {
  reservationId: string
  summary: ReservationSummary
  products: Product[]
}
