import { useNavigate, useParams } from 'react-router-dom'
import useCurrentPath from '../../hooks/useCurrentPath'
import Visibility from '@mui/icons-material/Visibility'
import Edit from '@mui/icons-material/Edit'

export default function ToggleViewButton() {
	const { id } = useParams()
	const navigate = useNavigate()
	const path = useCurrentPath()

	return (
		id && (
			<button onClick={() => navigate(path.isEdit ? `/${path.path}/${id}` : `/${path.path}/${id}/edit`)}>
				{path.isEdit ? <Visibility /> : <Edit />}
				{path.isEdit ? 'View' : 'Edit'}
			</button>
		)
	)
}
