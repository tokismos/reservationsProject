import { TableCell, TableRow } from "../ui/table"

export const EmptyStateRow = () => {
  return (
    <TableRow>
      <TableCell colSpan={4}>
        <div className="flex justify-center">No reservation found...</div>
      </TableCell>
    </TableRow>
  )
}
