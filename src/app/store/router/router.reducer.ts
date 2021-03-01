import * as fromRouter from '@ngrx/router-store';
import {Params} from '@angular/router';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export const routerNode = 'router';

export interface RouterState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params
}

export const reducers: ActionReducerMap<RouterState> = {
  routerReducer: fromRouter.routerReducer

};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
