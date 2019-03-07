import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../../product';
import {PRODUCTS} from '../../../data-mock';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//  cart: Product[] = [];
  cart: Product[] = PRODUCTS;
  constructor() {
  }

  getCart(): Product[] {
    return this.cart;
  }

}
