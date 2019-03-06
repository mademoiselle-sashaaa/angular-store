import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {PRODUCTS} from '../data-mock';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  addToCart(id: number): Observable<Product> {
    const product = PRODUCTS.find(_product => _product.id === id);
          product.inCart = true;
          product.count = 1;
          product.total = product.count * product.price;
    return of(product);
  }
}
