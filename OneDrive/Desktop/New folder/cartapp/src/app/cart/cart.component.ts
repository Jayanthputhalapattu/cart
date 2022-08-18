import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Cart } from './cart';
import { CartService } from './cart.service';
import { Products } from './product-details';
import { products } from './products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartItems !: any
  productcarts = Products
  quanti!:number
  userid = 2;
  //get total price from products array
  TotalPrice = 1345;
  constructor(private http:HttpClient,private cartservice: CartService) { }

  ngOnInit(): void {
     this.cartservice.getCartItems(this.userid)
     .subscribe((cartitems) => {
      this.cartItems =cartitems;
      console.log(this.cartItems);
    })
     console.log(this.cartItems)
  }
  handleClick(quantity :any,productname:string) 
  {
    console.log("came")
    this.cartservice.updateCartItem(this.userid,quantity,productname)
  }
  parseInter(s :string) : number
  {
    let num  = parseInt(s)
    console.log(s)
    console.log(num)
    return num
  }
  checkOut()
  {
    alert("Checkout successfull")
  }
}
