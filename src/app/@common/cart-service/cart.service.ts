import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() {
  }

  addProduct(product: Product) {
    this.cart.push(product);
  }

  removeProduct(id) {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  increaseTotal(id) {
    const selectedProduct = this.cart.find(item => item.id === id);
    selectedProduct.count += 1;
    selectedProduct.total = selectedProduct.price * selectedProduct.count;
  }

  decreaseTotal(id) {
    const selectedProduct = this.cart.find(item => item.id === id);
    if (selectedProduct.count !== 1) {
      selectedProduct.count -= 1;
      selectedProduct.total = selectedProduct.price * selectedProduct.count;
      return;
    }
    this.removeProduct(id);
  }


  getCart(): Product[] {
    return this.cart;
  }

}
