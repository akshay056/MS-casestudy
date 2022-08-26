import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';

import {MessengerService} from 'src/app/services/messenger.service'

import { Product } from 'src/app/models/product';

import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() cartsUpdated = new EventEmitter<Cart[]>();
  cartItems : any = [];

  cartTotal = 0
  cartToEdit?: Cart;
  constructor(private msg: MessengerService 
    , private cartService: CartService) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
    
  }

  handleSubscription() {
    this.msg.getMsg().subscribe(() => {
      this.loadCartItems();
    })
  }
  updateCart(cart :Cart) {
    this.cartService
      .updateCart(cart)
      .subscribe((carts: Cart[]) => this.cartsUpdated.emit(carts));
  }
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: Cart[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }
  editCart(cart:Cart) {
    this.cartToEdit =cart;
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach((item: { qty: number; price: number; }) => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  deleteCartitem(cart :Cart) {
    this.cartService
      .deleteCart(cart)
      .subscribe((  carts: Cart[]) => this.cartsUpdated.emit(carts));
  }
}