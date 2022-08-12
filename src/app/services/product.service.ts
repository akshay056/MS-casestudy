import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { productsUrl } from 'src/app/config/api';

import { Product } from 'src/app/models/product';

const apiUrl ='https://localhost:7218/api/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

   getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
}