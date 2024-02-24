import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ProductsComponent } from '@nx-demo/products';
import { productFeature ,loadProducts} from '@nx-demo/products';


export const appRoutes: Route[] = [
    {   path: 'category/:categoryName' ,
     loadComponent : ()=> import('@nx-demo/products').then((m) => m.ProductsComponent),
     providers : [provideState(productFeature),provideEffects({loadProducts})]
    }
];
