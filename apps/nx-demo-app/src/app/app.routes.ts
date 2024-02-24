import { Route } from '@angular/router';
import { ProductsComponent } from '@nx-demo/products';


export const appRoutes: Route[] = [
    {path: 'category/:categoryName' , loadComponent : ()=> import('@nx-demo/products').then((m) => m.ProductsComponent)}
];
