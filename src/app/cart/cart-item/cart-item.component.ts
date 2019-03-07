import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../product';
import {CartService} from '../../@common/cart-service/cart.service';
import {ProductsService} from '../../@common/products-service/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private productService: ProductsService,
    private cartService: CartService) {}

  increment(id: number) {
    console.log('increment', id);
    this.cartService.increaseTotal(id);
  }

  decrement(id: number) {
    console.log('decrement', id);
    this.cartService.decreaseTotal(id);
  }

  removeProduct(id: number) {
    this.cartService.removeProduct(id);
  }

  ngOnInit() {
  }

}
