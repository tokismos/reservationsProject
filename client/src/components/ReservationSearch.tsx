import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

type Props = {
  setActiveSearchId: (arg: string) => void
  isSearching: boolean
}

export const ReservationSearch = ({
  setActiveSearchId,
  isSearching,
}: Props) => {
  const [searchInput, setSearchInput] = useState("")

  const handleSearch = () => {
    if (searchInput) {
      setActiveSearchId(searchInput.trim())
    }
  }

  const handleClear = () => {
    setSearchInput("")
    setActiveSearchId("")
  }

  return (
    <>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute top-1/4 left-3 h-4 w-4 " />
          <Input
            type="search"
            placeholder="Search by reservation ID..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
        </div>

        <Button
          variant="default"
          onClick={handleSearch}
          disabled={!searchInput.trim() || isSearching}
        >
          Search
        </Button>

        <Button variant="outline" onClick={handleClear} disabled={!searchInput}>
          Clear
        </Button>
      </div>
    </>
  )
}
