import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly http : HttpClient) { }

  getAllProducts(){
    return this.http.get<string[]>('https://fakestoreapi.com/products')
    .pipe(
      catchError(err => {
        console.log("Error in the service file" , err);
        return of(['error'])
      })
    )
  }
}
