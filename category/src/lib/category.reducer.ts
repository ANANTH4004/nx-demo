import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import {getCategoryActionsFailure, getCategoriesActions, getCategoryActionsSuccess} from './category.action'



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
    on(getCategoryActionsSuccess,(state,action) => {
        return {
            ...state,
            categories : action.categories,
            error :''
        }
    }),
    on(getCategoryActionsFailure, (state,action)=>{
        return {
            ...state,
            categories : [],
            error : action.error,
        };
    })
)