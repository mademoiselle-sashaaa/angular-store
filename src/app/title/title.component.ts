import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() name = 'our';
  @Input() title = 'products';

  constructor() { }

  ngOnInit() {
  }

}
