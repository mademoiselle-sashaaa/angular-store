import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
@Input() cart: Product[] ;
  constructor() { }

  ngOnInit() {
  }

}
