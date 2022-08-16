import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart} from 'src/app/models/cart';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems :any = [];

  cartTotal = 0;

  constructor(
    public msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.loadCartItems();
  }
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: Cart[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach((items: { qty: number; price: number; })  => {
      this.cartTotal += (items.qty * items.price)
    })
  }
}
