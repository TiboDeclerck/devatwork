import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRowByID = async ({ url, id }) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export function useFetchRowByID(url, id, queryKey, options = {}) {
  return useQuery({
    queryKey: [queryKey, url, id], 
    queryFn: () => fetchRowByID({ url, id }),
    enabled: !!id,
    ...options,
  });
}
