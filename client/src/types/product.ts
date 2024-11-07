export type ProductStatus = "active" | "cancelled" | "offered"

export interface ProductDetail {
  product_name: string
  status: ProductStatus
  charge: number
}

export interface ReservationSummary {
  number_of_active_purchases: number
  sum_of_active_charges: number
}

export interface Reservation {
  reservation_uuid: string
  summary: ReservationSummary
  products: ProductDetail[]
}
