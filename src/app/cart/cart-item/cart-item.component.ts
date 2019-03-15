import { Component, Input } from '@angular/core';
import { CartService } from '../../@common/cart-service/cart.service';
import { ProductsService } from '../../@common/products-service/products.service';
import { Product } from '../../product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product: Product;

  constructor(
    private readonly productService: ProductsService,
    private readonly cartService: CartService) {}

  increment(id: number): void {
    this.cartService.increaseTotal(id);
  }

  decrement(id: number): void {
    this.cartService.decreaseTotal(id);
  }

  removeProduct(id: number): void {
    this.cartService.removeProduct(id);
  }
}
