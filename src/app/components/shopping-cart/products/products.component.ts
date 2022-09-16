import { Component, OnInit } from '@angular/core';

import {ProductService} from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductListComponent implements OnInit {

    productList:Product[] = []
    wishlist :number[]=[]
    public filterCategory : any
  constructor(private productService : ProductService) { 
  }

  ngOnInit()
  {
      this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((product)=>
    {
        this.productList = product;
        
    });
  }
  filter(findcategory:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == findcategory ||findcategory ==''){
        return a;
      }
    })
  }
  
}