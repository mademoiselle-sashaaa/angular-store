import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductsService } from '../@common/products-service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product;
  constructor( private route: ActivatedRoute,
               private productsService: ProductsService,
               private location: Location) {
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addToCart(id) {
    console.log('added', id);
  }

  openModal(id) {
    console.log('modal', id);
  }

  ngOnInit() {
    this.getProduct();
  }

}
