import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useCurrentPath from './useCurrentPath'

const getFieldsForModel = (modelName) => {
	switch (modelName) {
		case 'categories':
			return [
				{
					label: 'Name',
					name: 'name',
					type: 'text',
					placeholder: 'Enter name'
				}
			]
		case 'products':
			return [
				{
					label: 'Name',
					name: 'name',
					type: 'text',
					placeholder: 'Enter name'
				},
				{
					label: 'Price',
					name: 'price',
					type: 'number',
					placeholder: 'Enter price',
          componentProps: {
						min: '0.00',
						step: '0.01'
					}
				},
				{
					label: 'Category',
					name: 'category',
					type: 'select',
					placeholder: 'Select category',
					componentProps: {
						url: '/categories'
					}
				},
				{
					label: 'Supplier',
					name: 'supplier',
					type: 'select',
					placeholder: 'Select supplier',
					componentProps: {
						url: '/suppliers'
					}
				},
				{
					label: 'Stock Quantity',
					name: 'stockQuantity',
					type: 'number',
					placeholder: 'Enter stock quantity',
					componentProps: {
						min: '0',
						step: '1'
					}
				},
				{
					label: 'Description',
					name: 'description',
					type: 'textarea',
					placeholder: 'Enter description'
				},
				{
					label: 'SKU',
					name: 'SKU',
					type: 'text',
					placeholder: 'Enter SKU'
				}
			]
		case 'suppliers':
			return [
				{
					label: 'Name',
					name: 'name',
					type: 'text',
					placeholder: 'Enter name'
				}
			]
		default:
			return []
	}
}

export default function useFields() {
	const path = useCurrentPath()
	const { id } = useParams()

	const fields = useMemo(() => {
		return getFieldsForModel(path.path)
	}, [path.path])

	return { fields, id }
}
