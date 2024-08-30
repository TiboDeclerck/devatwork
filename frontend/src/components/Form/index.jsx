import React, { useEffect, useMemo } from 'react'
import useCurrentPath from '../../hooks/useCurrentPath'
import useFields from '../../hooks/useFields'
import useCreateOrUpdate from '../../api/useCreateOrUpdate'
import { useForm, FormProvider } from 'react-hook-form'
import { useFetchRowByID } from '../../api/useFetchRowByID'
import LinearProgress from '../LinearProgress'
import ToggleViewButton from './ToggleViewButton'
import Field from './Field'
import Tab from '../Tab'
import BackButton from './BackButton'

export default function Form() {
	const { path, isEdit } = useCurrentPath()
	const { fields, id } = useFields()
	const { data, error, isLoading } = useFetchRowByID(`/${path}`, id, path)
	const mutation = useCreateOrUpdate(`/${path}`, path)

	const methods = useForm({
		defaultValues: {}
	})

	const { reset, handleSubmit } = methods

	useEffect(() => {
		if (data) {
			reset(
				fields.reduce((acc, field) => {
					acc[field.name] = data[field.name] || '' // Use the fetched data or an empty string
					return acc
				}, {})
			)
		}
	}, [data, fields, reset])

	const onSubmit = (formData) => {
		mutation.mutate({ id, data: formData })
	}

	if (isLoading) {
		return <LinearProgress />
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<div className='max-w-lg mx-auto bg-white'>
			<Tab tabComponents={[BackButton, ToggleViewButton]} />
			<div className='p-4 mt-5 rounded shadow-md'>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						{fields.map((field) => (
							<Field key={field.name} field={field} isEdit={isEdit} id={id} />
						))}
						<button
							type='submit'
							className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition'
							disabled={!isEdit && id}
						>
							Save
						</button>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
