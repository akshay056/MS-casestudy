import {Product} from "./product";

export class Cart {
  id: number;
  productId: number;
  productName: string;
  qty: number;
  price: number;

  constructor(Id: number, ProductId:number , ProductName: string , Price: number,Qty: number=1) {
    this.id = Id;
    this.productId = ProductId;
    this.productName = ProductName;
    this.price = Price;
    this.qty = Qty;
  }
}