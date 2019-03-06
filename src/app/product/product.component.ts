import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../product';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() showFromProduct = new EventEmitter<{show: boolean, id: number}>(); // !!!!

  constructor(private productsService: ProductsService) {
  }

  addToCart(id: number) {
    this.productsService.addToCart(id)
      .subscribe(product => this.product = product);
  }

  //// !!!!!!!!!!!!!!!!
  showPopupProduct(id) {
    this.showFromProduct.emit({show: true, id} );
  }
}
