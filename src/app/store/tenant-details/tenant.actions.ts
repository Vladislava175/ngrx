import {Action} from '@ngrx/store';

export enum tenantActionsType {
  getTenant = '[TENANT] load tenants Failure',
  getTenantSuccess = '[TENANT] load tenant success',
  getTenantFailure = '[TENANT] load tenant Failure',

}

export class GetTenantAction implements Action {
  readonly type = tenantActionsType.getTenant;
}

export class GetTenantSuccessAction implements Action {
  readonly type = tenantActionsType.getTenantSuccess;

  constructor(public payload: {}) {
  }
}

export class GetTenantFailureAction implements Action {
  readonly type = tenantActionsType.getTenantFailure;

  constructor(public payload: {}) {
  }
}

export type TenantActions =
  GetTenantAction
  | GetTenantSuccessAction
  | GetTenantFailureAction;
