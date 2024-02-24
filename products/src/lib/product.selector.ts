import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productReducer } from "./product.reducer";

const productFeatureKey = "product";

export const selectProducFeatureKey = createFeatureSelector<ProductState>(productFeatureKey);

export const productFeatureState = createFeature({
    name: productFeatureKey,
    reducer : productReducer
})

export const getProductsSelector = createSelector(
    selectProducFeatureKey,
    (state) => state.products
)

export const getProductError = createSelector(
    selectProducFeatureKey,
    (state) => state.error
)