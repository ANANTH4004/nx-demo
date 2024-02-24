import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Product } from './store/products.action';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly http : HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
    .pipe(
      catchError(err => {
        console.log("Error in the service file" , err);
        return of([])
      })
    )
  }
  getProductsByCategory(category : string){
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
    .pipe(
      catchError(err => {
        console.log("Error in the service file" , err);
        return of([])
      })
    )
  }
}
