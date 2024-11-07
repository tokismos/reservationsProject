import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const SearchInput = () => {
  return (
    <div className="flex flex-row">
      <Input
        type="text"
        placeholder="Search by reservation ID..."
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-sm"
      />
      <Button type="submit" variant="default">
        Search
      </Button>
    </div>
  )
}
