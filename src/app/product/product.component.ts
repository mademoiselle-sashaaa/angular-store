import { Component, OnInit } from '@angular/core';
import {Phone} from '../phone';
import {detailProduct} from '../../data-mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Phone = detailProduct;
  constructor() { }

  ngOnInit() {
  }

}
