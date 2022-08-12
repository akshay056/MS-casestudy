import { ThisReceiver } from "@angular/compiler";

export class Product {
   id :number;
   name :string;
   category :string;
   description :string;
   price : number;
   imageFile :string;

   constructor(Id:number, Name:string,Category:string, Description = '', Price = 0, ImageFile = '') {
    this.id = Id
    this.name = Name
    this.category=Category
    this.description = Description
    this.price = Price
    this.imageFile = ImageFile
  }
}
