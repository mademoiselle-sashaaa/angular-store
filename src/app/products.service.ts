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
}
