import { createAction } from "@ngrx/store";

export const getProductActions = createAction(
    '[Products] Get Products',
)

export const getProductSuccess = createAction(
    '[Products] Get Products Success',
    (products:string[]) => ({products})
)
export const getProductFailure = createAction(
    '[Products] Get Products Failure',
    (error : string) => ({error})
)