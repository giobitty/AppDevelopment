import { Component } from '@angular/core';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  username = "Martha"
  itemname ="Pencil"
  setStatus:string = "No"
  getStockStatus(){
    return this.setStatus
  }
  isSoldOut:boolean = false
  constructor(){
    setTimeout((=>{
      this.isSoldOut = true
    },5000))
  }

  onSave(){
    alert('Info saved!')
  }
  prodmsg:string=''
  total_in_stock = 20
  total_added = 0
  outStock = ''
  btn_out_stock:boolean = false
  addProduct(){
    if(this.total_in_stock>0){
      this.total_added++
      this.total_in_stock--
    }else{
      this.outStock = "Item is out of stock"
      this.btn_out_stock = true
    }
  }
}
