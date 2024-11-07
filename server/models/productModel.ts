interface ReservationSummaryAccumulator {
  [key: string]: {
    reservation_uuid: string
    active_purchases: number
    total_charges: number
    products: ProductSummary[]
  }
}

interface ReservationProductSummary {
  product_name: string
  status: ProductStatus
  charge: number
}

interface FinalReservationSummary {
  reservation_uuid: string
  summary: {
    number_of_active_purchases: number
    sum_of_active_charges: number
  }
  products: ReservationProductSummary[]
}

import { PRODUCT_ASSIGMNET } from "../mockData/product_assignment"
import { PRODUCT_CHARGES } from "../mockData/product_charges"
import {
  CombinedProduct,
  ProductAssignment,
  ProductCharge,
  ProductStatus,
  ProductSummary,
} from "../types/product"

export const getProducts = (): FinalReservationSummary[] => {
  const combinedProducts: CombinedProduct[] = PRODUCT_ASSIGMNET.map(
    (assignment: ProductAssignment) => {
      const charge = PRODUCT_CHARGES.find(
        (charge: ProductCharge) =>
          charge.special_product_assignment_id === assignment.id
      )

      let status: ProductStatus = "offered"
      if (charge) {
        status = charge.active ? "active" : "cancelled"
      }

      return {
        ...assignment,
        status,
        charge: charge ? charge.amount : 0,
      }
    }
  )

  const reservationSummary =
    combinedProducts.reduce<ReservationSummaryAccumulator>((acc, product) => {
      if (!acc[product.reservation_uuid]) {
        acc[product.reservation_uuid] = {
          reservation_uuid: product.reservation_uuid,
          active_purchases: 0,
          total_charges: 0,
          products: [],
        }
      }

      if (product.status === "active") {
        acc[product.reservation_uuid].active_purchases += 1
        acc[product.reservation_uuid].total_charges += product.charge
      }

      acc[product.reservation_uuid].products.push({
        name: product.name,
        status: product.status,
        charge: product.charge,
      })

      return acc
    }, {})

  const summaryData: FinalReservationSummary[] = Object.values(
    reservationSummary
  ).map((reservation) => ({
    reservation_uuid: reservation.reservation_uuid,
    summary: {
      number_of_active_purchases: reservation.active_purchases,
      sum_of_active_charges: reservation.total_charges,
    },
    products: reservation.products.map((product) => ({
      product_name: product.name,
      status: product.status,
      charge: product.charge,
    })),
  }))

  return summaryData
}
