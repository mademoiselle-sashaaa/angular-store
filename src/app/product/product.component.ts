import {Component, Input} from '@angular/core';
import {Product} from '../product';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(private productsService: ProductsService) {
  }

  addToCart(id: number) {
    this.productsService.addToCart(id)
      .subscribe(product => this.product = product);
  }
}
