import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../@common/products-service/products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product [];
  selectedProduct: Product;
  showPopupList: { show: false, id: null };

  constructor(private readonly productsService: ProductsService) {
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  handleDetail(product: Product): void {
    this.selectedProduct = product;
  }

  showFromList($event): void {
    this.showPopupList = $event;
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
