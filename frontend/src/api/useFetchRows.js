import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export function useFetchData(url, queryKey, options = {}) {
  return useQuery({
    queryKey: [queryKey, url], 
    queryFn: () => fetchData(url),
    ...options,
  });
}
