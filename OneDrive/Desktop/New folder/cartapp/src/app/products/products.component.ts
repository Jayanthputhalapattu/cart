import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Products } from '../cart/product-details';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:HttpClient,private cartservice:CartService) { }
  productslist = Products
  userid = 2
  ngOnInit(): void {
  }
  addTocart(productname : string,userid :number)
  {
     this.cartservice.addtoCart(productname,userid,1)

  }
}
