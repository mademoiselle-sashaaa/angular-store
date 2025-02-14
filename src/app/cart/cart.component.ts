import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CartService } from '../@common/cart-service/cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Product[];

  private readonly onDestroy$ = new Subject();

  constructor(private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getEmitter()
      .pipe(
        takeUntil(this.onDestroy$),
      )
      .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
