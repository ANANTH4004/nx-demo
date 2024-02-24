import { createReducer, on } from "@ngrx/store"
import { getProductFailure, getProductSuccess } from "./product.action"

export interface ProductState {
    products : string[],
    error : string
}

const initialState : ProductState = {
    products: [],
    error: ""
}

export const productReducer = createReducer(
    initialState,
    on(getProductSuccess, (state,action)=>{
        return{
            ...state,
            products : action.products,
            error : ''
        }
    }),
    on(getProductFailure , (state,action)=> {
        return{
            ...state,
            error : action.error,
            products :[]
        }
    })
)