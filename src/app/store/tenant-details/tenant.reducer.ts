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
    case tenantActionsType.clean:
      return {
        ...state = initialState
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
    case tenantActionsType.updateTenantSuccess:
      return {
        ...state,
        tenant: {
          ...state.tenant,
          ['name']: action.payload.name,
          ['business_id']: action.payload.business_id,
          ['status']: action.payload.status.id
        },
        tenantHeaderData: [
          {title: 'שם חברה', value: action.payload.name},
          {title: 'מס ח.פ.', value: action.payload.business_id},
          {title: 'סטטוס', value: action.payload.status.name}],
        tenantDetails: [
          {title: ' בנק מצרף', value: action.payload.origin.name},
          {title: 'שם הלקוח', value: action.payload.name},
          {title: 'טלפון נייד', value: action.payload.phone},
          {title: 'דואר אלקטרוני', value: action.payload.username}
        ]
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
