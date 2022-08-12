import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  constructor() { }

  ngOnInit() {
  }

}