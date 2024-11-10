import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
  startIndex: number
  endIndex: number
  previousPage: () => void
  currentPage: number
  totalPages: number
  nextPage: () => void
  totalItems: number
}

export const Pagination = ({
  startIndex,
  endIndex,
  previousPage,
  currentPage,
  totalPages,
  nextPage,
  totalItems,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between px-2">
      <div className=" text-gray-500">
        Showing {startIndex + 1}-{endIndex} of {totalItems}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-sm">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
