import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"
import { AccordionContent } from "./ui/accordion"
import { Badge } from "./ui/badge"
import { getStatusColor } from "@/utils/getStatusColor"
import { Reservation } from "@/types/product"

type AccordionReservationProps = {
  products: Reservation[]
}
export const AccordionReservation = ({
  products,
}: AccordionReservationProps) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {products?.map((reservation) => (
        <AccordionItem
          key={reservation.reservation_uuid}
          value={reservation.reservation_uuid}
          className="border rounded-lg p-2 shadow-sm"
        >
          <AccordionTrigger className="hover:no-underline w-full">
            <div className="flex flex-col w-full text-left px-2">
              <div className="flex justify-between items-center w-full">
                <span className="font-medium">
                  Reservation: {reservation.reservation_uuid}
                </span>
                <span className="text-sm text-gray-600">
                  {reservation.summary.number_of_active_purchases} active items
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Total charges: {reservation.summary.sum_of_active_charges}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="mt-4 space-y-4">
              {reservation.products.map((product, index) => (
                <div
                  key={index}
                  className="border rounded p-3 flex justify-between items-center"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{product.product_name}</p>
                    <Badge
                      variant="secondary"
                      className={`${getStatusColor(product.status)} text-white`}
                    >
                      {product.status}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.charge}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
