import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ReservationRow } from "./ReservationRow"
import { Reservation } from "@/types/reservation"

type ReservationsTableProps = {
  reservations: Reservation[]
}

export const ReservationsTable = ({ reservations }: ReservationsTableProps) => {
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
          {reservations?.map((reservation) => (
            <ReservationRow
              key={reservation.reservationId}
              reservation={reservation}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
