import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../@common/cart-service/cart.service';
import { ProductsService } from '../@common/products-service/products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() readonly showFromProduct = new EventEmitter<{ show: boolean, id: number }>(); // !!!!

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartSevice: CartService,
  ) {
  }

  addToCart(id: number): void {
    this.productsService.addToCart(id)
      .subscribe(product => {
        this.product = product;
        this.cartSevice.addProduct(product);
      });
  }

  //// !!!!!!!!!!!!!!!!
  showPopupProduct(id: number): void {
    this.showFromProduct.emit({show: true, id});
  }
}
