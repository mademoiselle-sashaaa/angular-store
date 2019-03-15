import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  private readonly cart$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {
  }

  getEmitter(): Observable<Product[]> {
    return this.cart$.asObservable();
  }

  addProduct(product: Product): void {
    this.cart.push(product);
    this.cart$.next(this.cart);

  }

  removeProduct(id: number): void { // stupid solution!!!!!
    const selectedProduct = this.cart.find(item => item.id === id);
    selectedProduct.count = 0;
    selectedProduct.total = 0;
    selectedProduct.inCart = false;

    const tempCart = this.cart = this.cart.filter(item => item.id !== id);
    this.cart$.next(tempCart);
  }

  increaseTotal(id: number): void {
    const selectedProduct = this.cart.find(item => item.id === id);
    selectedProduct.count += 1;
    selectedProduct.total = selectedProduct.price * selectedProduct.count;
  }

  decreaseTotal(id: number): void {
    const selectedProduct = this.cart.find(item => item.id === id);
    if (selectedProduct.count !== 1) {
      selectedProduct.count -= 1;
      selectedProduct.total = selectedProduct.price * selectedProduct.count;

      return;
    }
    this.removeProduct(id);
  }

  getCart(): void {
    this.cart$.next(this.cart);
  }

}
