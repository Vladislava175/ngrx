import {Action} from '@ngrx/store';
import {Obj} from '../../models/obj';

export enum tenantActionsType {
  getTenant = '[TENANT] set tenant',
  getTenantSuccess = '[TENANT] load tenant success',
  getTenantFailure = '[TENANT] load tenant Failure',
  getOrigin = '[TENANT] get origin',
  getOriginSuccess = '[TENANT] get origin success',
  getOriginFailure = '[TENANT] get origin failure',

}

export class GetTenantAction implements Action {
  readonly type = tenantActionsType.getTenant;

  constructor(public payload: { tenantId: string }) {
  }
}

export class GetOriginAction implements Action {
  readonly type = tenantActionsType.getOrigin;
}

export class GetOriginSuccessAction implements Action {
  readonly type = tenantActionsType.getOriginSuccess;

  constructor(public payload: { origins: any[] }) {
  }
}

export class GetOriginFailureAction implements Action {
  readonly type = tenantActionsType.getOriginFailure;

  constructor(public payload: { origins: any[] }) {
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
  | GetOriginAction
  | GetOriginSuccessAction
  | GetOriginFailureAction
  | GetTenantFailureAction;
