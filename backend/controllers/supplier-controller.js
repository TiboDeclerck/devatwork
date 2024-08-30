import * as ss from "../services/supplier-service.js";

export function createSupplier(req, res) {
  try {
    const { name } = req.body;
    const supplier = ss.createSupplier({ name });
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export function getAllSuppliers(req, res) {
  const suppliers = ss.getAllSuppliers();
  res.json(suppliers);
}

export function getSupplierByID(req, res) {
  const { id } = req.params;
  const supplier = ss.getSupplierByID(parseInt(id));
  if (!supplier) {
    return res.status(404).json({ error: "Supplier not found" });
  }
  res.json(supplier);
}

export function updateSupplier(req, res) {
  try {
    const { id } = req.params;
    const supplier = ss.updateSupplier(
      parseInt(id),
      req.body
    );
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    res.json(supplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export function deleteSupplier(req, res) {
  const { id } = req.params;
  const success = ss.deleteSupplier(parseInt(id));
  if (!success) {
    return res.status(404).json({ error: "Supplier not found" });
  }
  res.status(204).send();
}
