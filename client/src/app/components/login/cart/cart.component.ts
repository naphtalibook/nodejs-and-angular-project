import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../servises/products/cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public Products: any = [];
  public cartId: any;
  constructor(public CartService:CartService) { }

  ngOnInit() {
  }

  // removeFromcart(product){

  // }

  getCart(){
    this.CartService.getCartById(this.cartId).subscribe((res)=>{
      this.Products = res[0].products;
      console.log(this.Products);
    },err => console.log(err));
  }
}
