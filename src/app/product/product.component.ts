import { Component, Input } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;

  handleDetail(product) {
    console.log(product);
  }

  addToCart(product) {
    console.log('added');
  }
}
