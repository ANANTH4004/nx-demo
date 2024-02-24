import { Injectable } from "@angular/core";
import { CategoryService } from "./category.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import {getCategoriesActions, getCategoryActionsSuccess , getCategoryActionsFailure} from './category.action'



@Injectable()
export class categoryEffects {

    constructor(private readonly catagoryService : CategoryService,private actions$ :Actions){}

    loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesActions),
      mergeMap(() =>
        this.catagoryService.getCategories().pipe(
          map((categories) => getCategoryActionsSuccess(categories)),
          catchError(() => of(getCategoryActionsFailure('Error Occured')))
        )
      )
    )
  );
}