import {Component, Input, OnInit} from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  @Input() show: boolean;
 // @Input() id: number;
  product: Product;

  constructor() { }

  closeModal() {
    this.show = false;
  }

  ngOnInit() {
  }

}
