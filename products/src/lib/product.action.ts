import { createAction } from "@ngrx/store";
import { Product } from "./store/products.action";

export const getProductActions = createAction(
    '[Products] Get Products',
)

export const getProductSuccess = createAction(
    '[Products] Get Products Success',
    (products:Product[]) => ({products})
)
export const getProductFailure = createAction(
    '[Products] Get Products Failure',
    (error : string) => ({error})
)