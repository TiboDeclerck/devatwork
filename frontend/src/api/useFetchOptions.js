import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchOptions = async ({ queryKey }) => {
  const [url, query] = queryKey;
  const response = await axios.get(`${url}/dropdown`, {
    params: { filter: query },
  });
  return response.data;
};

export function useFetchOptions(url) {
  const [query, setQuery] = useState('');

  const { data, error, isLoading } = useQuery({
    queryKey: [url, query],
    queryFn: fetchOptions,
    keepPreviousData: true,
    staleTime: 5000,
  });

  return {
    data: data || [],
    error,
    isLoading,
    query,
    setQuery,
  };
}
