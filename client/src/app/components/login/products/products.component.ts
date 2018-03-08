import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../servises/products/products.service';
import { CartService } from '../../../servises/products/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public Products: any;
  public searchText: string = '';
  public min: number;
  public max: number;
  public page : number = 1;
  public nextDisable: boolean = false;
  constructor(public ProductsService:ProductsService, public CartService:CartService) { }

  ngOnInit() {
    this.responseAll();
    // this.ProductsService.getProducts(this.page).subscribe((res) =>{
    //   this.Products = res;
    // },err=> console.log(err));
  }
  
  responseAll(){
    this.ProductsService.queryConstructor(this.page,this.searchText,this.min,this.max).subscribe((res) =>{
        this.Products = res;
        if(this.Products.length < 10){
          this.nextDisable = true;
        }else{
          this.nextDisable = false;
        }
    },err=> console.log(err));
  }

  addToCart(product){
    //console.log('not working');
    this.CartService.addToCart(product).subscribe((res)=>{
      console.log(res);
    },err => console.log('ng err'));
  }



  search(event){
    if((event.length % 2 === 0 && event.length > 0) || event.length == 0){
      this.page = 1;
      this.responseAll();
      // this.ProductsService.search(event).subscribe((res) => {
      //   this.Products = res;
      // }, err => console.log(err));
    }
  }

  filterPrice(){
    if((this.min != null && this.max != null) &&(this.min < this.max)){
      this.page = 1;
      this.responseAll();
      // this.ProductsService.filterByPrice(this.min,this.max).subscribe((res) => {
      //   this.Products = res;
      // }, err => console.log(err));
    }
  }
  nextPage(){
    if(this.Products.length < 10){
       
      }else{
        this.page++;
        this.responseAll();
      }
    // this.ProductsService.getProducts(this.page).subscribe((res) =>{
    //   if(res.length != 0){
    //     this.Products = res;
    //   }else{
    //     this.page--;
    //   }
    // },err=> console.log(err));

  }
  prevPage(){
    if(this.page > 1){
      this.page--;
      this.responseAll();
      // this.page--;
      // this.ProductsService.getProducts(this.page).subscribe((res) =>{
      //   this.Products = res;
      // },err=> console.log(err));
    }
  }
  



}
