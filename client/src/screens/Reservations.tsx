import { useState } from "react"
import { ReservationsTable } from "@/components/ReservationsTable/ReservationsTable"
import { useGetReservations } from "@/hooks/useGetReservations"

import { useGetReservationById } from "@/hooks/useGetReservationById"
import { ReservationSearch } from "@/components/ReservationSearch"

export const Reservations = () => {
  const [activeSearchId, setActiveSearchId] = useState("")

  const {
    data: reservations,
    isLoading: isLoadingReservations,
    error: reservationsError,
  } = useGetReservations()

  const {
    data: searchResults,
    isLoading: isSearching,
    error: searchError,
  } = useGetReservationById(activeSearchId)

  const isLoading = isLoadingReservations
  const error = reservationsError || searchError
  const displayData = (activeSearchId ? searchResults : reservations) ?? []

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <span>Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full p-4">
        <div className="px-4 py-2 rounded-md">
          An error has occurred:
          {error instanceof Error ? error.message : "Unknown error"}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      <ReservationSearch
        isSearching={isSearching}
        setActiveSearchId={setActiveSearchId}
      />
      <ReservationsTable reservations={displayData} isSearching={isSearching} />
    </div>
  )
}
