import {TenantsActions, tenantsActionsType} from './tenants.actions';

export const tenantsNode = 'tenants';

export interface TenantsState {
  tenants: any[],
  loading: boolean,
  error: any
}

const initialState: TenantsState = {
  tenants: [],
  loading: false,
  error: undefined
};

export const tenantsReducer = (state = initialState, action: TenantsActions) => {
  switch (action.type) {
    case tenantsActionsType.load:
      return {
        ...state,
        loading: true
      };
    case tenantsActionsType.openDialogCreateTenant:
      return {
        ...state
      };
    case tenantsActionsType.loadSuccess:
      return {
        ...state,
        tenants: action.payload,
        loading: false
      };

    case tenantsActionsType.loadFailure:
      return {
        ...state,
        error: 'error',
        loading: false
      };

    case tenantsActionsType.add:
      return {
        ...state,
        loading: true
      };
    case tenantsActionsType.addSuccess:
      return {
        ...state,
        tenants: [...state.tenants, action.payload],
        loading: false
      };
    case tenantsActionsType.addFailure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case tenantsActionsType.delete:
      return {
        ...state,
        loading: true
      };
    case tenantsActionsType.deleteSuccess:
      return {
        ...state,
        tenants: state.tenants.filter(item => item.id !== action.payload),
        loading: false
      };
    case tenantsActionsType.deleteFailure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
