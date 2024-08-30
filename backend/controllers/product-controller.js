import * as ps from '../services/product-service.js'

export function createProduct(req, res) {
	try {
		const { name, price, category, supplier, stockQuantity, description, SKU } = req.body
		const product = ps.createProduct({ name, price, category, supplier, stockQuantity, description, SKU })
		res.status(201).json(product)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

export function getAllProducts(req, res) {
	const products = ps.getAllProducts()
	res.json(products)
}

export function getProductByID(req, res) {
	const { id } = req.params
	const product = ps.getProductByID(parseInt(id))
	if (!product) {
		return res.status(404).json({ error: 'Product not found' })
	}
	res.json(product)
}

export function updateProduct(req, res) {
	try {
		const { id } = req.params
		const product = ps.updateProduct(parseInt(id), req.body)
		if (!product) {
			return res.status(404).json({ error: 'Product not found' })
		}
		res.json(product)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

export function deleteProduct(req, res) {
	const { id } = req.params
	const success = ps.deleteProduct(parseInt(id))
	if (!success) {
		return res.status(404).json({ error: 'Product not found' })
	}
	res.status(204).send()
}
