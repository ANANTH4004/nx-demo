import { createActionGroup, emptyProps, props } from "@ngrx/store";

export interface Product {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}

export const ProductsActions = createActionGroup(
    {
        source : 'Product',
        events : {
            'Get Product' :emptyProps,
            'Product Success' : props<{products :Product[]}>(),
            'product Failure' : props<{error : string}>()

        }
    }
)