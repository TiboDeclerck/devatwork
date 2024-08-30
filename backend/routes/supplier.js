import express from "express";
import * as sc from "../controllers/supplier-controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import supplierSchema from "../schemas/supplier.js";

const router = express.Router();

router.post("/", validateSchema(supplierSchema), sc.createSupplier);
router.put("/:id", validateSchema(supplierSchema), sc.updateSupplier);

router.get("/", sc.getAllSuppliers);
router.get("/:id", sc.getSupplierByID);
router.delete("/:id", sc.deleteSupplier);

export default router;
