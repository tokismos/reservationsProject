import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ReservationRow } from "./ReservationRow"
import { Reservation } from "@/types/reservation"
import { usePagination } from "@/hooks/usePagination"
import { Pagination } from "../Pagination"

type ReservationsTableProps = {
  reservations: Reservation[]
  isSearching: boolean
  itemsPerPage?: number
  isSearchActive: boolean
}

export const ReservationsTable = ({
  reservations,
  isSearching,
  isSearchActive,
  itemsPerPage = 20,
}: ReservationsTableProps) => {
  const {
    nextPage,
    previousPage,
    getCurrentPageData,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
  } = usePagination({
    totalItems: reservations.length,
    itemsPerPage,
  })

  const isEmpty = !isSearching && !reservations.length
  const displayedReservations = isSearchActive
    ? reservations
    : getCurrentPageData(reservations)

  if (isSearching)
    return (
      <div className="border rounded-lg">
        <div className="flex justify-center">Loading...</div>
      </div>
    )

  if (isEmpty)
    return (
      <div className="border rounded-lg">
        <div className="flex justify-center">No reservation found...</div>
      </div>
    )

  return (
    <div className="space-y-4">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead>Reservation UUID</TableHead>
              <TableHead>Number of Active Purchases</TableHead>
              <TableHead className="text-right">
                Sum of Active Charges
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {displayedReservations.map((reservation) => (
              <ReservationRow
                key={reservation.reservationId}
                reservation={reservation}
              />
            ))}
          </TableBody>

          {!isSearchActive && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>
                  <Pagination
                    startIndex={startIndex}
                    endIndex={endIndex}
                    previousPage={previousPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    nextPage={nextPage}
                    totalItems={reservations.length}
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </div>
  )
}
