import express from "express";
import * as pc from "../controllers/product-controller.js";

const router = express.Router();

router.post("/", pc.createProduct);
router.get("/", pc.getAllProducts);
router.get("/:id", pc.getProductByID);
router.put("/:id", pc.updateProduct);
router.delete("/:id", pc.deleteProduct);

export default router;
