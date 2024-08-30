import express from "express";
import * as pc from "../controllers/product-controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import productSchema from "../schemas/product.js";

const router = express.Router();

router.post("/", validateSchema(productSchema), pc.createProduct);
router.put("/:id", validateSchema(productSchema), pc.updateProduct);

router.get("/", pc.getAllProducts);
router.get("/:id", pc.getProductByID);
router.delete("/:id", pc.deleteProduct);

export default router;
