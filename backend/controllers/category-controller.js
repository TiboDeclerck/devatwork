import * as cs from "../services/category-service.js";

export function createCategory(req, res) {
  try {
    const { name } = req.body;
    const category = cs.createCategory({ name });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export function getAllCategories(req, res) {
  const categories = cs.getAllCategories();
  res.json(categories);
}

export function getCategoryByID(req, res) {
  const { id } = req.params;
  const category = cs.getCategoryByID(parseInt(id));
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.json(category);
}

export function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const category = cs.updateCategory(
      parseInt(id),
      req.body
    );
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export function deleteCategory(req, res) {
  const { id } = req.params;
  const success = cs.deleteCategory(parseInt(id));
  if (!success) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.status(204).send();
}
