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
  cart:Product[] = []; 
  products: Product[] = []; // Array to hold the list of products
  private datasource: Datasource;
  quantityToAdd: number = 1; //default quantity to add
  showConfirmation: boolean = false;
  confirmationMessage: string = '';
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
    const productInCart = this.cart.find(p => p.id === product.id);
    if (productInCart) {
      // Update the quantity if the product is already in the cart
      productInCart.quantity = (productInCart.quantity || 0) + this.quantityToAdd;
    } else {
      // Add new product to the cart with the specified quantity
      this.cart.push({ ...product, quantity: this.quantityToAdd });
    }
    this.showConfirmation = true;
    this.confirmationMessage = `${this.quantityToAdd} ${product.name} added to cart.`;
    this.quantityToAdd = 1; // Reset quantity after adding to cart
  }
}
