import Category from "../models/category.js";

let categories = [];

export function createCategory({ name }) {
  const category = new Category({
    id: categories.length + 1,
    name,
  });
  categories.push(category);
  return category;
}

export function getAllCategories() {
  return categories;
}

export function getCategoriesDropdown(filter = "") {
  return categories.filter((c) => c.name.toLowerCase().includes(filter.toLowerCase()) || c.name === filter).slice(0, 25);
}

export function getCategoryByID(id) {
  return categories.find((c) => c.id === id);
}

export function updateCategory(id, { name }) {
  const category = categories.find((c) => c.id === id);
  if (!category) return null;

  const updatedCategory = new Category({
    id: category.id,
    name: name,
  });

  category.name = updatedCategory.name;

  return category;
}

export function deleteCategory(id) {
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return null;

  categories.splice(index, 1);
  return true;
}
