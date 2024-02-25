import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { loadProductByCategory, loadProducts, productFeature } from '@nx-demo/products';



export const appRoutes: Route[] = [
    // {   path: 'category/:categoryName' ,
    //  loadComponent : ()=> import('@nx-demo/products').then((m) => m.ProductsComponent),
    //  providers : [provideState(productFeature),provideEffects({loadProducts})]
    // }
    {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
      },
      {
        path: 'product',
        loadComponent: () => import('@nx-demo/products').then((m) => m.ProductsComponent),
        providers: [
          provideState(productFeature),
          provideEffects({ loadProducts}),
        ],
      },
      {
        path: 'product/:categoryName',
        loadComponent: () => import('@nx-demo/products').then((m) => m.ProductsComponent),
        data: {
          animation: 'CategoryPage',
        },
        providers: [
          provideState(productFeature),
          provideEffects({ loadProducts, loadProductByCategory }),
        ],
      },
];
