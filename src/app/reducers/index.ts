import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {tenantsNode, tenantsReducer, TenantsState} from './tenant/tenant.reducer';

export interface State {
  // [countNode]: CountState;
  readonly [tenantsNode]: TenantsState;
}

export let reducers: ActionReducerMap<State>;
reducers = {
  /*  // @ts-ignore
    [countNode]: countReducer,*/
  // @ts-ignore
  [tenantsNode]: tenantsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
