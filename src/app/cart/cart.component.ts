import {Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {CartService} from '../@common/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // cart: Product[];

  constructor(public cartService: CartService) {
  }

  getCart() {
   // this.cart = this.cartService.getCart();
  }

  ngOnInit() {
    //this.getCart();
  }
}
