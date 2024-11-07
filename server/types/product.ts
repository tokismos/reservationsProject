export interface ProductAssignment {
  id: number
  reservation_uuid: string
  name: string
}

export interface ProductCharge {
  special_product_assignment_id: number
  active: boolean
  amount: number
}

export type ProductStatus = "offered" | "active" | "cancelled"

export interface CombinedProduct extends ProductAssignment {
  status: ProductStatus
  charge: number
}

export interface ProductSummary {
  name: string
  status: ProductStatus
  charge: number
}
