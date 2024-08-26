export default class Supplier {
    constructor({ id, name }) {
      if (!name) {
        throw new Error("Supplier name is required");
      }
  
      this.id = id;
      this.name = name;
    }
  }
  