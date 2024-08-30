import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import useCurrentPath from '../hooks/useCurrentPath'
import useSnackbar from "../hooks/useSnackbar";

export function useDelete(endpoint, entityKey) {
	const { id } = useParams()
    const { path } = useCurrentPath()
	const navigate = useNavigate()
	const queryClient = useQueryClient()
    const { showSuccess, showError } = useSnackbar();

	return useMutation({
		mutationFn: async () => {
			const response = await axios.delete(`${endpoint}/${id}`)

			return response.data
		},
		onSuccess: (data) => {
            showSuccess("Deleted successfully")
			navigate(`/${path}`)
		},
		onError: (error, context) => {
            showError(error.response.data?.error || error.response.data);

			queryClient.setQueryData([entityKey], context.previousItems)
		},
		onSettled: () => {
			queryClient.invalidateQueries([entityKey])
		}
	})
}
