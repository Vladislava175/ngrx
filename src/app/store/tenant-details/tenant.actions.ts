import {Action} from '@ngrx/store';
import {Obj} from '../../models/obj';

export enum tenantActionsType {
  getTenant = '[TENANT] set tenant',
  getTenantSuccess = '[TENANT] load tenant success',
  getTenantFailure = '[TENANT] load tenant Failure',

}

export class GetTenantAction implements Action {
  readonly type = tenantActionsType.getTenant;

  constructor(public payload: { tenantId: string }) {
  }
}

export class GetTenantSuccessAction implements Action {
  readonly type = tenantActionsType.getTenantSuccess;

  constructor(public payload: {
    tenant: any,
    tenantHeaderData: Obj[],
    tenantDetails: Obj[]
  }) {
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
