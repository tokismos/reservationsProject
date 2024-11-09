export type ProductStatus = "active" | "cancelled" | "offered"

export interface Product {
  productName: string
  status: ProductStatus
  charge: number
}
