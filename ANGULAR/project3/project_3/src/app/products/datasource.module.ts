import { Product } from './products.model';

export class Datasource {
  private products: Product[];
  private cart: Product[] = [];

  constructor() {
    this.products = [
      new Product(1, 'T-Shirt', 'Apparel', 14, 'assets/tshirt.webp',10),
      new Product(2, 'MacBook Pro', 'Electronics', 2999, 'assets/macbookPro.jpeg',25),
      new Product(3, 'Leather Boots', 'Shoes', 120, 'assets/leatherb.jpg',6)
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(p:Product){
    return this.cart.push(p);
  }
  grandTotal(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
