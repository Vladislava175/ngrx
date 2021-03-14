import {TenantActions, tenantActionsType} from './tenant.actions';

export const tenantNode = 'tenant';

export interface TenantState {
  tenant: any,
  user: any,
  loading: boolean,
  error: any,
  origins: [],
  tenantHeaderData: [],
  tenantDetails: [],
  users: any[]
}

const initialState: TenantState = {
  tenant: null,
  user: null,
  loading: false,
  error: undefined,
  origins: [],
  tenantHeaderData: [],
  tenantDetails: [],
  users: []
};

export const tenantReducer = (state = initialState, action: TenantActions) => {
  switch (action.type) {
    case tenantActionsType.usersSuccess:
      return {
        ...state,
        users: action.payload.users,
        // @ts-ignore
        tenantDetails: [state.tenantDetails[0], state.tenantDetails[1], action.payload.tenantDetails[0], action.payload.tenantDetails[1]]
      };
    case tenantActionsType.getTenant:
      return {
        ...state,
        loading: true,
        tenantId: action.payload.tenantId
      };
    case tenantActionsType.createTenant:
      return {
        ...state,
        tenant: action.payload.tenant
      };
    case tenantActionsType.createUser:
      return {
        ...state,
        user: action.payload.user,
        tenantId: action.payload.tenantId
      };
    case tenantActionsType.createUserFailure:
      return {
        ...state,
        error: action.payload
      };
    case tenantActionsType.createTenantSuccess:
      return {
        ...state,
        tenant: {['id']: action.payload.tenantId}
      };
    case tenantActionsType.createTenantFailure:
      return {
        ...state,
        error: action.payload
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
