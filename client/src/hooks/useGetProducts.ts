import { getAllProducts } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: getAllProducts,
    select: ({ data }) => data,
  })
}
