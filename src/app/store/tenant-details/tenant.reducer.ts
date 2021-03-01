import {TenantActions, tenantActionsType} from './tenant.actions';

export const tenantNode = 'tenant';

export interface TenantState {
  tenantId: number,
  loading: boolean,
  error: any
}

const initialState: TenantState = {
  tenantId: 0,
  loading: false,
  error: undefined
};

export const tenantReducer = (state = initialState, action: TenantActions) => {
  switch (action.type) {
    case tenantActionsType.getTenant:
      return {
        ...state,
        loading: true
      };
    case tenantActionsType.getTenantSuccess:
      return {
        ...state,
        tenants: action.payload,
        loading: false
      };

    case tenantActionsType.getTenantFailure:
      return {
        ...state,
        error: 'error',
        loading: false
      };

    default:
      return state;
  }
};
