import { Component } from '@angular/core';
import { Product } from './products.model';
import { CommonModule } from '@angular/common';
import { Datasource } from './datasource.module';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgClass,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //for the modal windows
  selectedProduct: Product | null = null;
  // Array to hold cart items
  cart: { product: Product, quantity: number, name:string,price:number }[] = []; 
  products: Product[] = []; // Array to hold the list of products
  private datasource: Datasource;
  quantityToAdd: number = 1; //default quantity to add

  constructor() {
    this.datasource = new Datasource(); // Initialize datasource
  }

  ngOnInit(): void {
    this.products = this.datasource.getProducts(); // Fetch products on component initialization
  }

  openProductModal(product: Product): void {
    this.selectedProduct = product; 
    this.quantityToAdd = 1;
    console.log('You are trying to buy:', product);
  }

  closeModal(): void {
    this.selectedProduct = null; // Reset selected product when modal is closed
  }
  addToCart(product: Product): void {

    // Check if the product is already in the cart
    const existingProduct = this.datasource.getCart().find(p => p.id === product.id);

    if (existingProduct) {
      if (existingProduct.quantity < product.quantity) {
        existingProduct.quantity += 1; 
        // Increment quantity if there are still items left in stock
        product.quantity -= 1; 
        // Decrement the quantity of the product in the list
      } else {
        console.log('No more items left in stock.');
      }
    } else {
      if (product.quantity > 0) {
        this.datasource.addToCart(product);
        product.quantity -= 1; // Decrement the quantity of the product in the list
      } else {
        console.log('No more items left in stock.');
      }
    }
    console.log(`${product.name} added to cart`);
  }
}
