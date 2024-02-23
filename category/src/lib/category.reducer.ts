import { createReducer, on } from "@ngrx/store";
import {categoryActions,categoryActionsSuccess, categoryActionsFailure} from './category.action'

export interface categoryState {
    categories :  string[],
    currentCategory : string,
    error:string
}
const initailState :categoryState = {
    categories : [],
    currentCategory : '',
    error:''
}
export const categoryReducer = createReducer(
    initailState,
    on(categoryActionsSuccess,(state,action) => {
        return {
            ...state,
            categories : state.categories,
            error :''
        }
    }),
    on(categoryActionsFailure, (state,action)=>{
        return {
            ...state,
            categories : [],
            error : action.error,
        };
    })
)