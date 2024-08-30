import Supplier from "../models/supplier.js";

let suppliers = [];

export function createSupplier({ name }) {
  const supplier = new Supplier({
    id: suppliers.length + 1,
    name,
  });
  suppliers.push(supplier);
  return supplier;
}

export function getAllSuppliers() {
  return suppliers;
}

export function getSuppliersDropdown(filter = "") {
  return suppliers.filter((s) => s.name.toLowerCase().includes(filter.toLowerCase()) || s.name === filter).slice(0, 25);
}

export function getSupplierByID(id) {
  return suppliers.find((c) => c.id === id);
}

export function updateSupplier(id, { name }) {
  const supplier = suppliers.find((c) => c.id === id);
  if (!supplier) return null;

  const updatedSupplier = new Supplier({
    id: supplier.id,
    name: name,
  });

  supplier.name = updatedSupplier.name;

  return supplier;
}

export function deleteSupplier(id) {
  const index = suppliers.findIndex((c) => c.id === id);
  if (index === -1) return null;

  suppliers.splice(index, 1);
  return true;
}
