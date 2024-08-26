export default class Category {
  constructor({ id, name,
    createdAt = new Date(),
    updatedAt = new Date(), }) {
    if (!name) {
      throw new Error("Category name is required");
    }

    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
