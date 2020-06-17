export class Product {
  id: Number;
  name: String;
  shortDescription: String;
  description: String;
  price: Number;
  constructor(
    id: Number,
    name: String,
    shortDescription: String,
    description: String,
    price: Number
  ) {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
    this.price = price;
    this.description = description;
  }
}
