import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'
import {CartService} from 'src/app/services/cart.service'
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

   @Input() productItem!:Product ;
   @Input() cartItem! :Cart;
  
  constructor(private msg:MessengerService,
    private cartservice :CartService) { }

  ngOnInit(): void {
  }


  handleAddToCart(){
    this.cartservice.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })
   
  }

}