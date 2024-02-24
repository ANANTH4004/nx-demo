import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, provideState } from '@ngrx/store';
import { productFeature, selectProducts } from '../store/products.selector';
import { ProductsActions } from '../store/products.action';
import { getProductsSelector } from '../product.selector';

@Component({
  selector: 'nx-demo-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  @Input() categoryName :string = '';

  products$ = this.store.select(selectProducts)
  constructor(private readonly store :Store){}
  ngOnInit(): void {
    this.store.dispatch(ProductsActions.getProduct())
  }

}
