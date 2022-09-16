import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Cart } from '../models/cart';
import {Observable} from  'rxjs'
import { map } from 'rxjs/operators';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItems: Cart[] = [];
  constructor(private http:HttpClient) { }

  public getCartItems(): Observable<Cart[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.productId) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new Cart(item.id, item.productId,item.productName,item.price,item.qty));
          }
        }

        return cartItems;
      })
    );
  }


  public addProductToCart(product:Product):Observable<any>
  {
        return this.http.post(cartUrl,{product});
  }
  public updateCart(cart:Cart): Observable<Cart[]> {
    return this.http.put<Cart[]>(
      `${cartUrl}`,
      cart
    );
  }
  public deleteCart(cart :Cart): Observable<Cart[]> {
    return this.http.delete<Cart[]>(
      `${cartUrl}/${cart.id}`
    );
  }
  removeAllCart(){
    this.cartItems = []
  }
}