import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ProductsService } from '../@common/products-service/products.service';
import { Product } from '../product';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit, OnChanges {
  @Input() showPopup: { show: boolean, id: number }; // create interface???
  product: Product;

  constructor(private readonly productsService: ProductsService) {
  }

  closeModal(): void {
    this.showPopup.show = false;
  }

  getProduct(): void {
    this.productsService.getProduct(this.showPopup.id)
      .subscribe(product => this.product = product);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.showPopup && this.showPopup.show) {
      this.getProduct();
    }
  }
}
