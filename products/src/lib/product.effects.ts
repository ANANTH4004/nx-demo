import { Injectable } from "@angular/core";
import { ProductsService } from "./products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { getProductActions, getProductFailure, getProductSuccess } from "./product.action";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class ProductEffects {
    constructor(private readonly prodService : ProductsService, private  actions$ : Actions){}
    loadProduts$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getProductActions),
            exhaustMap(()=>
            this.prodService.getAllProducts().pipe(
                map( result => getProductSuccess(result)),
                catchError((err)=> of(getProductFailure(err)))
            )
            )
        )
    )
}