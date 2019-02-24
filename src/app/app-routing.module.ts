import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CartComponent} from './cart/cart.component';
import {DefaultComponent} from './default/default.component';
import {DetailsComponent} from './details/details.component';
import {ProductListComponent} from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'details', component: DetailsComponent },
  { path: '404', component: DefaultComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
