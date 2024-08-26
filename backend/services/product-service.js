import Product from "../models/product.js"

let products = []

export function createProduct({ name, price, category, supplier, stockQuantity, description, SKU }) {
  const product = new Product({
    id: products.length + 1,
    name,
    price,
    category,
    supplier,
    stockQuantity,
    description,
    SKU
  })
  products.push(product)
  return product
}

export function getAllProducts() {
  return products
}

export function getProductByID(id) {
  return products.find((product) => product.id === id)
}

export function updateProduct(id, { name, price, category, supplier, stockQuantity, description, SKU  }) {
  const product = products.find((p) => p.id === id)
  if (!product) return null

  const updatedProduct = new Product({
    id: product.id,
    name: name,
    price: price,
    category: category,
    supplier,
    stockQuantity,
    description,
    SKU
  });

  product.name = updatedProduct.name;
  product.price = updatedProduct.price;
  product.category = updatedProduct.category;

  return product;
}

export function deleteProduct(id) {
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return null
  const deletedProduct = products.splice(index, 1)[0]
  return deletedProduct
}
