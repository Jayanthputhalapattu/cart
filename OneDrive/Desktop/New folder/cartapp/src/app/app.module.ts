import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient,HttpClientModule,HttpErrorResponse} from "@angular/common/http"
import { CartComponent } from './cart/cart.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ModalComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
