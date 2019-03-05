import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  addToCart(id) {
    console.log('added', id);
  }

  openModal(id) {
    console.log('modal', id);
  }

  ngOnInit() {
  }

}
