import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private readonly http :HttpClient) { }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories').pipe(
      catchError(err =>{
        console.log("error in the service file")
        return of(['error'])
      })
    )
  }
}
