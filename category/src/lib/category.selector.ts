import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { categoryReducer, categoryState } from "./category.reducer";
import { state } from "@angular/animations";

const categoryFeatureKey = 'category';
export const selectCategoryState = createFeatureSelector<categoryState>(categoryFeatureKey)
export const categoryFeature = createFeature({
    name : categoryFeatureKey,
    reducer: categoryReducer
})

//const selectCategoryState =(state : categoryState) => state;

export const selectCategories = createSelector(
    selectCategoryState,
    (state) => state.categories
)

export const selectError = createSelector(
    selectCategoryState,
    (state) => state.error
)