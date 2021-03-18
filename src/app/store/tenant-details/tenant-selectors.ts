import {createFeatureSelector, createSelector} from '@ngrx/store';
import {tenantNode, TenantState} from './tenant.reducer';
import {Tenant} from '../../models/tenant';

export const selectTenantFeature = createFeatureSelector<TenantState>(tenantNode);

export const selectTenantId = createSelector(
  selectTenantFeature,
  (state: TenantState): number => state.tenant?.id);


export const selectUsers = createSelector(
  selectTenantFeature,
  (state: TenantState): any[] => state.users);
export const selectTenant = createSelector(
  selectTenantFeature,
  (state: TenantState): Tenant => state.tenant);
