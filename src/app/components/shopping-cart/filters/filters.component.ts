import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListComponent } from '../products/products.component';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  
  public productList : any ;
  public filterCategory : any
  constructor(private Productl : ProductListComponent) { }

  ngOnInit(): void {
  }
  filter(findcategory:string){
    
    return this.Productl.filter(findcategory)
   
  }
}
