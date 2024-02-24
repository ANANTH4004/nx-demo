import { createReducer, on } from "@ngrx/store";
import { Product, ProductsActions } from "./products.action";

export interface productState {
    products : Product[],
    error :string,
    productsCount : number
}

const initialState : productState = {
    products: [],
    error: "",
    productsCount: 0
}

export const getProductByCategoryReducer = createReducer(
    initialState,
    on(ProductsActions.productSuccess,(state,action)=>{
        return{
            ...state,
            products:action.products,
            productsCount : action.products.length,
            error : ""
        }
    }),
    on(ProductsActions.productFailure,(state,action)=>{
        return{
            ...state,
            products : [],
            productCount : 0,
            error : action.error
        }
    })
    
    )
