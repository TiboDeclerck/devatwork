import express from "express";
import * as cc from "../controllers/category-controller.js";
import categorySchema from "../schemas/category.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = express.Router();

router.post("/", validateSchema(categorySchema), cc.createCategory);
router.put("/:id", validateSchema(categorySchema), cc.updateCategory);

router.get("/", cc.getAllCategories);
router.get("/dropdown", cc.getCategoriesDropdown);
router.get("/:id", cc.getCategoryByID);
router.delete("/:id", cc.deleteCategory);

export default router;
