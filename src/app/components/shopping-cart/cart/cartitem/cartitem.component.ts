import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  @Input() cartItem!:Cart 
  constructor(private msg:MessengerService,private cartservice :CartService) { }

  ngOnInit(): void {
  }

}