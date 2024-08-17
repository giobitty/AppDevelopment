import { Product } from './products.model';

export class Datasource {
  private products: Product[];
  // create the cart that will contain the products
  private cart: Product[] = [];

  constructor() {
    this.products = [
      new Product(1, 'T-Shirt', 'Apparel', 14,'assets/tshirt.webp',10),
      new Product(2, 'MacBook Pro', 'Electronics', 2999,'assets/macbookPro.jpeg',52),
      new Product(3, 'Leather Boots', 'Shoes', 120,'assets/leatherb.jpg',33)
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
  addToCart(product: Product): void {
    this.cart.push({...product, quantity: 1}); // Add product to cart with quantity 1
  }

  getCart(): Product[] {
    return this.cart;
  }
}
