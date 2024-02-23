import {createAction} from '@ngrx/store';
export const categoryActions = createAction('[category] Get Categories');

export const categoryActionsSuccess = createAction(
    '[Category] Get Categories Success' , 
    (categories : string[]) =>({categories})
);

export const categoryActionsFailure = createAction(
    '[Categories] Get Categories Failure',
    (error:string) =>({error})
);
