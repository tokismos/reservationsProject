import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { TableCell, TableRow } from "@/components/ui/table"
import { ProductsTable } from "./ProductsTable"
import { Reservation } from "@/types/reservation"

export const ReservationRow = ({
  reservation,
}: {
  reservation: Reservation
}) => {
  return (
    <Collapsible asChild>
      <>
        <CollapsibleTrigger asChild>
          <TableRow className="group  cursor-pointer hover:bg-slate-50">
            <TableCell>
              <ChevronRight className="w-4 h-4 duration-200 group-data-[state=open]:rotate-90" />
            </TableCell>
            <TableCell className="font-medium">
              {reservation.reservationId}
            </TableCell>
            <TableCell>{reservation.summary.nbrOfActivePurchases}</TableCell>
            <TableCell className="text-right">
              {reservation.summary.sumActiveCharges}
            </TableCell>
          </TableRow>
        </CollapsibleTrigger>

        <CollapsibleContent asChild>
          <TableRow>
            <TableCell colSpan={4} className="p-0 bg-slate-50">
              <ProductsTable products={reservation.products} />
            </TableCell>
          </TableRow>
        </CollapsibleContent>
      </>
    </Collapsible>
  )
}
