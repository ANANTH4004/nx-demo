import {createAction} from '@ngrx/store';
export const getCategoriesActions = createAction('[Category] Get Categories');

export const getCategoryActionsSuccess = createAction(
    '[Category] Get Categories Success',
  (categories: string[]) => ({ categories })
);

export const getCategoryActionsFailure = createAction(
    '[Category] Get Categories Failure',
  (error: string) => ({ error })
);
