import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient){ 
   
  }
  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
  getCartItems(userid:number) :Observable<Cart[]>
  {
    //get the products as well from the server...
    return this.http.get<Cart[]>(`http://localhost:2323/${userid}/getcart`).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  
  updateCartItem(userid:number ,quantity:number ,productname:string)
  {
    const updatecartDetails = {
      "quantity" : quantity,
      "productname":productname,
      "userid":userid
  }
   
    console.log(updatecartDetails)
    this.http.put(`http://localhost:2323/${userid}/updatecart`,updatecartDetails)
    .subscribe((data)=>console.log(data))

  }
  addtoCart(productname:string ,userid : number,quantity:number):any
  {
         var postCartDetails = {userid:userid,quantity:1,productname:productname}
         console.log(postCartDetails)
         this.http.post(`http://localhost:2323/${userid}/addtocart`,postCartDetails)
         .subscribe((data)=>console.log(data))
  }  
  
}
