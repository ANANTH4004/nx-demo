import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService, getCategoriesActions, selectCategories } from '@nx-demo/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
// import { getProductActions, getProductsSelector, productFeatureState } from '@nx-demo/products';
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,MainNavComponent,CommonModule,MatCardModule],
  selector: 'th-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'nx-demo-app';
  constructor(private readonly store :Store){}
  // products$ = this.store.select(getProductsSelector)
  ngOnInit(): void {
  //  this.store.dispatch(getProductActions())
  }
  
}
