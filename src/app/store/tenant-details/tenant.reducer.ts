import {TenantActions, tenantActionsType} from './tenant.actions';

export const tenantNode = 'tenant';

export interface TenantState {
  tenant: any,
  loading: boolean,
  error: any,
  origins: [],
  tenantHeaderData: [],
  tenantDetails: []
}

const initialState: TenantState = {
  tenant: null,
  loading: false,
  error: undefined,
  origins: [],
  tenantHeaderData: [],
  tenantDetails: []
};

export const tenantReducer = (state = initialState, action: TenantActions) => {
  switch (action.type) {
    case tenantActionsType.getTenant:
      return {
        ...state,
        loading: true,
        tenantId: action.payload.tenantId
      };
    case tenantActionsType.getOrigin:
      return {
        ...state
      };
    case tenantActionsType.getOriginSuccess:
      return {
        ...state,
        origins: action.payload.origins
      };
    case tenantActionsType.getTenantSuccess:
      return {
        ...state,
        tenant: action.payload.tenant,
        tenantHeaderData: action.payload.tenantHeaderData,
        tenantDetails: action.payload.tenantDetails,
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
