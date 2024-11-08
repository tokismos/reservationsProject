import { PRODUCT_ASSIGNMENT } from "../mockData/product_assignment"
import { PRODUCT_CHARGES } from "../mockData/product_charges"
import {
  CombinedProduct,
  ProductAssignment,
  ProductCharge,
  ProductStatus,
} from "../types/product"

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

export const getReservations = (): FinalReservationSummary[] => {
  const combinedProducts: CombinedProduct[] = PRODUCT_ASSIGNMENT.map(
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

  const reservationSummary = combinedProducts.reduce((acc, product) => {
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
  ).map((reservation: any) => ({
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

export const getReservation = (reservationId) => {
  const allProducts = getReservations()
  const reservation = allProducts.find(
    (reservation) => reservation.reservation_uuid === reservationId
  )

  return reservation
}
