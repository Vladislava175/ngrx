import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {DEFAULT_ROUTER_FEATURENAME, routerReducer, RouterReducerState} from '@ngrx/router-store';
import {tenantsNode, tenantsReducer, TenantsState} from './tenants/tenants.reducer';
import {tenantNode, tenantReducer} from './tenant-details/tenant.reducer';

export interface State {
  readonly [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState,
  readonly [tenantsNode]: TenantsState;
}

export let reducers: ActionReducerMap<State> = {
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
  // @ts-ignore
  [tenantsNode]: tenantsReducer,
  [tenantNode]: tenantReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
