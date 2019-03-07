import {Component, Input, OnInit, OnChanges} from '@angular/core';

import {Product} from '../product';
import {ProductsService} from '../@common/products-service/products.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit, OnChanges {
  @Input() showPopup: { show: boolean, id: number }; // create interface???
  product: Product;

  constructor(private productsService: ProductsService) {
  }

  closeModal() {
    this.showPopup.show = false;
  }

  getProduct(): void {
    this.productsService.getProduct(this.showPopup.id)
      .subscribe(product => this.product = product);
  }


  ngOnInit() {
  }

  ngOnChanges() {
    if (this.showPopup && this.showPopup.show) {
      this.getProduct();
    }
  }
}
