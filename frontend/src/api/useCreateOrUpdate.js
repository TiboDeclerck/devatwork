import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useSnackbar from "../hooks/useSnackbar";
import useCurrentPath from "../hooks/useCurrentPath";
import { useNavigate } from "react-router-dom";

export default function useCreateOrUpdate(endpoint, entityKey) {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const { path } = useCurrentPath()
  const { showSuccess, showError } = useSnackbar();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      if (id) {
        const response = await axios.put(`${endpoint}/${id}`, data);
        return response.data;
      } else {
        const response = await axios.post(endpoint, data);
        return response.data;
      }
    },
    onSuccess: (data, variables) => {
      const { id } = variables;

      if (id) {
        queryClient.setQueryData([entityKey, id], data);
      }

      if(!endpoint.includes(id)) {
        navigate(`/${path}`)
      }

      showSuccess(JSON.stringify(data, null, 2));

      queryClient.invalidateQueries([entityKey]);
    },
    onError: (error, variables) => {
      const { id } = variables;

      showError(error.response.data?.error || error.response.data);

      console.error(`Error during ${id ? "update" : "create"}:`, error);
    },
    onSettled: () => {
      console.log("Mutation has settled");
    },
  });
}
