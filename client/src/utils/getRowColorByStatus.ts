import { ProductStatus } from "@/types/product"

export const getRowColorByStatus = (status: ProductStatus) => {
  switch (status) {
    case "active":
      return "bg-green-500"
    case "cancelled":
      return "bg-red-500"
    case "offered":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}
