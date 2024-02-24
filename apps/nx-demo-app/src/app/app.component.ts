import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService, getCategoriesActions, selectCategories } from '@nx-demo/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,MainNavComponent,CommonModule],
  selector: 'th-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'nx-demo-app';
  constructor(private readonly store : Store){}
  ngOnInit(): void {
   this.store.dispatch(getCategoriesActions())
  }
  //categories$ = inject(CategoryService).getCategories();
  categories$ = this.store.select(selectCategories)

  
}
