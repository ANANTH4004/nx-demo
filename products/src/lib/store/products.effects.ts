import { inject } from '@angular/core';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Product, ProductsActions } from './products.action';
import { ProductsService } from '../products.service';


export const loadActors = createEffect(
    (actions$ = inject(Actions), productService = inject(ProductsService)) => {
      return actions$.pipe(
        ofType(ProductsActions.getProduct),
        mergeMap((action) =>
        productService.getProductsByCategory('electronics').pipe(
            mergeMap((products) => [
                ProductsActions.productSuccess({ products }),
            ]),
            catchError((error: { message: string }) =>
              of(ProductsActions.productFailure({ error: error.message }))
            )
          )
        )
      );
    },
    { functional: true }
  );