import express from "express"
const router = express.Router()

import productRoutes from "./products.js"
import categoryRoutes from "./categories.js"
import supplierRoutes from "./supplier.js"

router.use('/products', productRoutes)
router.use('/categories', categoryRoutes)
router.use('/suppliers', supplierRoutes)

export default router