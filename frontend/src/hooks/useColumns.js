import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useCurrentPath from './useCurrentPath'

const getColumnsForModel = (modelName) => {
	switch (modelName) {
		case 'categories':
			return [
				{
					field: 'name',
					headerName: 'Name'
				}
			]
		case 'products':
			return [
				{
					field: 'name',
					headerName: 'Name'
				},
				{
					field: 'price',
					headerName: 'Price'
				},
				{
					field: 'category',
					headerName: 'Category',
					valueGetter: (params) => params.name
				},
				{
					field: 'supplier',
					headerName: 'Supplier',
					valueGetter: (params) => params.name
				},
				{
					field: 'stockQuantity',
					headerName: 'Stock Quantity',
          width: 175
				},
				{
					field: 'description',
					headerName: 'Description',
          width: 200
				},
				{
					field: 'SKU',
					headerName: 'SKU'
				}
			]
		case 'suppliers':
			return [
				{
					field: 'name',
					headerName: 'Name'
				}
			]
		default:
			return []
	}
}

export default function useColumns() {
	const path = useCurrentPath()
	const { id } = useParams()

	const columns = useMemo(() => {
		return getColumnsForModel(path.path).map((c) => {
			return { width: 125, resizable: false, ...c }
		})
	}, [path.path])

	return { columns, id }
}
