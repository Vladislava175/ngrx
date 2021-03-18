import {createFeatureSelector, createSelector} from '@ngrx/store';
import {tenantNode, TenantState} from './tenant.reducer';

export const selectTenantFeature = createFeatureSelector<TenantState>(tenantNode);

export const selectTenantId = createSelector(
  selectTenantFeature,
  (state: TenantState): number => state.tenant?.id);


export const selectUsers = createSelector(
  selectTenantFeature,
  (state: TenantState): any[] => state.users);
