import React from 'react'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

	return (
		<button onClick={handleBack}><ArrowLeft />Back</button>
	)
}
