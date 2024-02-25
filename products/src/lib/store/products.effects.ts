import { inject } from '@angular/core';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Product, ProductsActions } from './products.action';
import { ProductsService } from '../products.service';


export const loadProducts = createEffect(
    (actions$ = inject(Actions), productService = inject(ProductsService)) => {
      return actions$.pipe(
        ofType(ProductsActions.getProduct),
        mergeMap((action) =>
        productService.getAllProducts().pipe(
            map((products) => 
                ProductsActions.productSuccess({ products }),
            ),
            catchError((error: { message: string }) =>
              of(ProductsActions.productFailure({ error: error.message }))
            )
          )
        )
      );
    },
    { functional: true }
  );

  export const loadProductByCategory = createEffect(
    (actions$ = inject(Actions),prodService = inject(ProductsService)) => {
      return actions$.pipe(
        ofType(ProductsActions.loadProductByCategory),
        exhaustMap((action)=> 
        prodService.getProductsByCategory(action.categoryName).pipe(
          map((products) => ProductsActions.productSuccess({products})),
          catchError((error)=> of(ProductsActions.productFailure({error})))
        )
        )
      )
    },
    {functional : true}
  )