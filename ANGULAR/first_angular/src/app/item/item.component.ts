import { Component } from '@angular/core';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
    // implicit data
    username = "Peter Pan"
    itemname = "pencils"
    // explicit data
    setStatus:string = "Yes"
    getStockStatus(){
      return this.setStatus
    }
    // Property binding if this isSoldout is true the 'add to cart' button will be disabled
    isSoldout:boolean = false
    constructor(){
      setTimeout(()=>{
        this.isSoldout = true
      }, 5000)
    }
    // event binding ex a function gets called on click <element (click) = 'onSave()'>Save</element>
    onSave(){
      alert('Info saved!')
    }
    productmsg:string = ""
    cart_product = 0
    outofStock = ''
    btnOutStock = false
    addProduct(){
      this.productmsg = "Product added"
      if(this.totalqnt>0){
      this.totalqnt -= 1
      this.cart_product += 1
    }else{
      this.outofStock = "Item souldout!"
      this.btnOutStock = true
    }
    }
    deleteProduct(){
      this.cart_product --
      this.totalqnt ++
    }
    totalqnt = 5
}
