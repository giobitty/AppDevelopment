import { Datasource } from "./datasource.module";
import { Product } from "./products.model";

export class ProductsRepository {
  private datasource: Datasource;
  private products: Product[];

  constructor() {
    this.datasource = new Datasource();
    this.products = []; // Initialize as an empty array

    // Populate the products array with data from the datasource
    this.datasource.getProducts().forEach(p => this.products.push(p));
  }

  getProducts(): Product[] {
    return this.products;
  }
}
