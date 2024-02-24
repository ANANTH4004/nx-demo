import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { getProductByCategoryReducer, productState } from "./products.reducer";


const productsFeatureKey = "Products";

export const productFeature = createFeature({
    name : productsFeatureKey,
    reducer : getProductByCategoryReducer
})
export const selectProductState = createFeatureSelector<productState>(productsFeatureKey);

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
)
export const selectProductError = createSelector(
    selectProductState,
    (state) => state.error
)