import {Action} from '@ngrx/store';

export enum tenantsActionsType {
  tenants = '[TENANTS] get',
  add = '[TENANTS] add tenant',
  addSuccess = '[TENANTS] add tenant success',
  addFailure = '[TENANTS] add tenant failure',
  load = '[TENANTS] load tenants Failure',
  loadSuccess = '[TENANTS] load tenants success',
  loadFailure = '[TENANTS] load tenants Failure',
  openDialogCreateTenant = '[TENANTS] open create tenant',
}

export class GetTenantsAction implements Action {
  readonly type = tenantsActionsType.tenants;

}

export class OpenCreateTenantAction implements Action {
  readonly type = tenantsActionsType.openDialogCreateTenant;
}

export class AddTenantAction implements Action {
  readonly type = tenantsActionsType.add;

  constructor(public payload: {}) {
  }
}

export class AddTenantSuccessAction implements Action {
  readonly type = tenantsActionsType.addSuccess;

  constructor(public payload: {}) {
  }
}

export class AddTenantFailureAction implements Action {
  readonly type = tenantsActionsType.addFailure;

  constructor(public payload: {}) {
  }
}

export class LoadTenantAction implements Action {
  readonly type = tenantsActionsType.load;
}

export class LoadTenantSuccessAction implements Action {
  readonly type = tenantsActionsType.loadSuccess;

  constructor(public payload: {}) {
  }
}

export class LoadTenantFailureAction implements Action {
  readonly type = tenantsActionsType.loadFailure;

  constructor(public payload: any) {
  }

}

export type TenantsActions =
  GetTenantsAction
  | AddTenantAction
  | AddTenantSuccessAction
  | AddTenantFailureAction
  | LoadTenantAction
  | LoadTenantSuccessAction
  | LoadTenantFailureAction
  | OpenCreateTenantAction;
