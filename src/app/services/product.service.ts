import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

const prodUrl ='https://localhost:7171/api/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

   getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(prodUrl);
  }
}