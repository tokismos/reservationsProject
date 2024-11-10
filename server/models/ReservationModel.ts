import { PRODUCT_ASSIGNMENT } from "../mockData/product_assignment.js"
import { PRODUCT_CHARGES } from "../mockData/product_charges.js"
import {
  CombinedProduct,
  ProductAssignment,
  ProductCharge,
  ProductStatus,
} from "../types/product.js"

interface ReservationProductSummary {
  productName: string
  status: ProductStatus
  charge: number
}

interface FinalReservationSummary {
  reservationId: string
  summary: {
    nbrOfActivePurchases: number
    sumActiveCharges: number
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
    reservationId: reservation.reservation_uuid,
    summary: {
      nbrOfActivePurchases: reservation.active_purchases,
      sumActiveCharges: Math.round(reservation.total_charges),
    },
    products: reservation.products.map((product) => ({
      productName: product.name,
      status: product.status,
      charge: Math.round(product.charge),
    })),
  }))

  return summaryData
}

export const getReservation = (reservationId) => {
  const allProducts = getReservations()
  const reservation = allProducts.find(
    (reservation) => reservation.reservationId === reservationId
  )
  return reservation
}
