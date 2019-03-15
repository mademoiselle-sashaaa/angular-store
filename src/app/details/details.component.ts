import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';

import { PRODUCTS } from '../../data-mock';
import { Product } from '../product';

import { CartService } from '../@common/cart-service/cart.service';
import { ProductsService } from '../@common/products-service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product: Product;

  constructor(private readonly route: ActivatedRoute,
              private readonly productsService: ProductsService,
              private readonly cartService: CartService,
              private readonly location: Location) {
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

  openModal(id: number): void {
    console.log('modal', id);
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
