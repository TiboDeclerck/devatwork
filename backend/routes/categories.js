import express from "express";
import * as cc from "../controllers/category-controller.js";

const router = express.Router();

router.post("/", cc.createCategory);
router.get("/", cc.getAllCategories);
router.get("/:id", cc.getCategoryByID);
router.put("/:id", cc.updateCategory);
router.delete("/:id", cc.deleteCategory);

export default router;
