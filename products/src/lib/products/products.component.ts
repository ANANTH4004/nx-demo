import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, provideState } from '@ngrx/store';
import { getProductById, productFeature, selectProducts } from '../store/products.selector';
import { ProductsActions } from '../store/products.action';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'nx-demo-products',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  @Input() set categoryName(name : string) {
    if(name){
      this.store.dispatch(ProductsActions.loadProductByCategory({categoryName : name}))
    }else{
      this.store.dispatch(ProductsActions.getProduct());
    }
  }
  
  
   products$ =  this.store.select(selectProducts);
  constructor(private readonly store :Store){}
  ngOnInit(): void {
    // this.store.dispatch(ProductsActions.getProduct());
   
  }

}
