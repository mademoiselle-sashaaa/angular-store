import {Component, OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product [];
  selectedProduct: Product;
  showPopupList: false;

  constructor(private productsService: ProductsService) {
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  handleDetail(product): void {
    this.selectedProduct = product;
  }

  showFromList($event) {
    this.showPopupList = $event;
  }

  ngOnInit() {
    this.getProducts();
  }

}
