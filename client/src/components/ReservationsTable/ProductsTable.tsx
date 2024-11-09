import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Product } from "@/types/product"
import { getRowColorByStatus } from "@/utils/getRowColorByStatus"

type ProductsTableProps = {
  products: Product[]
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <div className="py-4 px-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Charge</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow
              key={index}
              className={cn(
                "hover:bg-[none]",
                `${getRowColorByStatus(product.status)} font-medium`
              )}
            >
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell className="text-right">{product.charge}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
