import express from "express"
const router = express.Router()

import productRoutes from "./products.js"
import categoryRoutes from "./categories.js"

router.use('/products', productRoutes)
router.use('/categories', categoryRoutes)

export default router