export default class Product {
  constructor({
    id,
    name,
    price,
    category,
    supplier,
    stockQuantity = 0,
    description = "",
    SKU = "",
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    if (!name) {
      throw new Error("Product name is required");
    }
    if (price == null || price < 0) {
      throw new Error("Product price must be a non-negative number");
    }
    if (!category) {
      throw new Error("Product category is required");
    }
    if (!supplier) {
      throw new Error("Product supplier is required");
    }
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.supplier = supplier;
    this.stockQuantity = stockQuantity;
    this.description = description;
    this.SKU = SKU;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
