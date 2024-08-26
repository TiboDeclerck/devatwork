export default class Supplier {
  constructor({ id, name, createdAt = new Date(), updatedAt = new Date() }) {
    if (!name) {
      throw new Error("Supplier name is required");
    }

    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
