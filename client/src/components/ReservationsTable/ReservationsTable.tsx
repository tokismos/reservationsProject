import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ReservationRow } from "./ReservationRow"
import { Reservation } from "@/types/reservation"
import { EmptyStateRow } from "./EmptyStateRow"

type ReservationsTableProps = {
  reservations: Reservation[]
  isSearching: boolean
}

export const ReservationsTable = ({
  reservations,
  isSearching,
}: ReservationsTableProps) => {
  const isEmpty = !isSearching && !reservations.length
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead>Reservation UUID</TableHead>
            <TableHead>Number of Active Purchases</TableHead>
            <TableHead className="text-right">Sum of Active Charges</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isEmpty ? (
            <EmptyStateRow />
          ) : (
            reservations?.map((reservation) => (
              <ReservationRow
                key={reservation.reservationId}
                reservation={reservation}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
