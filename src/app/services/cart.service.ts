import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

const cartUrl ='https://localhost:7242/api/Carts'

//const cartUrl ='http://localhost:3000/cart'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new Cart(item.id, item.productName,item.price));
          }
        }

        return cartItems;
      })
    );
  }
  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}