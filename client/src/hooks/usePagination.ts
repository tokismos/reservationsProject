import { useState } from "react"

type PaginationProps = {
  totalItems: number
  itemsPerPage: number
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

  const nextPage = () => {
    setCurrentPage((p) => Math.min(p + 1, totalPages))
  }

  const previousPage = () => {
    setCurrentPage((p) => Math.max(p - 1, 1))
  }

  const getCurrentPageData = <T>(data: T[]): T[] => {
    return data.slice(startIndex, endIndex)
  }

  return {
    nextPage,
    previousPage,
    currentPage,
    getCurrentPageData,
    totalPages,
    startIndex,
    endIndex,
  }
}
