import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Observable, of} from 'rxjs';

import {Product} from '../product';
import {PRODUCTS} from '../../data-mock';

import {ProductsService} from '../@common/products-service/products.service';
import {CartService} from '../@common/cart-service/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private cartService: CartService,
              private location: Location) {
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addToCart(id: number): Observable<Product> {
    const product = PRODUCTS.find(_product => _product.id === id);
    product.inCart = true;
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.cartService.addProduct(product);
    return of(product);
  }

  openModal(id) {
    console.log('modal', id);
  }

  ngOnInit() {
    this.getProduct();
  }
}
