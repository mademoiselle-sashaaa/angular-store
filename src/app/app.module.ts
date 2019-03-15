import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartColumnsComponent } from './cart/cart-columns/cart-columns.component';
import { CartEmptyComponent } from './cart/cart-empty/cart-empty.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartComponent } from './cart/cart.component';
import { DefaultComponent } from './default/default.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    DetailsComponent,
    DefaultComponent,
    CartComponent,
    TitleComponent,
    PopUpComponent,
    CartEmptyComponent,
    CartColumnsComponent,
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
