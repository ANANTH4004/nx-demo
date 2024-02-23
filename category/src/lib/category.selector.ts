import { createFeatureSelector } from "@ngrx/store";
import { categoryState } from "./category.reducer";

const selectCategoryState =(state : categoryState) => state;

const selectCategories = (state:categoryState) => state.categories;

const selectError = (state : categoryState) => state.error;