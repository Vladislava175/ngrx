import {Action} from '@ngrx/store';
import {Obj} from '../../models/obj';

export enum tenantActionsType {
  getTenant = '[TENANT] get tenant',
  getTenantSuccess = '[TENANT] load tenant success',
  getTenantFailure = '[TENANT] load tenant Failure',
  getOrigin = '[TENANT] get origin',
  getOriginSuccess = '[TENANT] get origin success',
  getOriginFailure = '[TENANT] get origin failure',
  createTenant = '[TENANT] create tenant',
  createTenantSuccess = '[TENANT] create tenant success',
  createTenantFailure = '[TENANT] create tenant failure',
  createUser = '[TENANT] create User',
  createUserSuccess = '[TENANT] create User success',
  createUserFailure = '[TENANT] create User failure',
  deleteTenant = '[TENANT] delete tenant',
  deleteSuccess = '[TENANT] delete tenant success',
  deleteFailure = '[TENANT] delete tenant',
  users = '[TENANT] get users',
  usersSuccess = '[TENANT] get users success',
  usersFailure = '[TENANT] get users failure',
  deleteUser = '[TENANT] delete user',
  deleteUserSuccess = '[TENANT] delete user success',
  deleteUserFailure = '[TENANT] delete user failure',

  clean = '[TENANT] clean',
  sendMessage = '[TENANT] send message',
  sendMessageSuccess = '[TENANT] send message success',
  sendMessageFailure = '[TENANT] send message failure',
  updateTenant = '[TENANT] update tenant',
  updateTenantSuccess = '[TENANT] update tenant success',
  updateTenantFailure = '[TENANT] update tenant Failure',
}

export class GetUsersAction implements Action {
  readonly type = tenantActionsType.users;

  constructor(public payload: string) {
  }
}

export class SendMessageAction implements Action {
  readonly type = tenantActionsType.sendMessage;

  constructor(public payload: any) {
  }
}

export class SendMessageSuccessAction implements Action {
  readonly type = tenantActionsType.sendMessageSuccess;

  constructor() {
  }
}

export class SendMessageFailureAction implements Action {
  readonly type = tenantActionsType.sendMessageFailure;

  constructor(public payload: string) {
  }
}


export class GetUsersSuccessAction implements Action {
  readonly type = tenantActionsType.usersSuccess;

  constructor(public payload: { users: any[], tenantDetails: any[] }) {
  }
}

export class CleanAction {
  readonly type = tenantActionsType.clean;

}

export class GetUsersFailureAction implements Action {
  readonly type = tenantActionsType.usersFailure;

  constructor(public payload: {}) {
  }
}

export class DeleteTenantAction implements Action {
  readonly type = tenantActionsType.deleteTenant;

  constructor(public payload: { id: number }) {
  }
}

export class DeleteTenantSuccessAction implements Action {
  readonly type = tenantActionsType.deleteSuccess;
}

export class DeleteTenantFailureAction implements Action {
  readonly type = tenantActionsType.deleteFailure;

  constructor(public payload: {}) {
  }
}

export class CreateTenantAction {
  readonly type = tenantActionsType.createTenant;

  constructor(public payload: { tenant: any }) {
  }
}

export class CreateTenantSuccessAction {
  readonly type = tenantActionsType.createTenantSuccess;

  constructor(public payload: { tenantId: string }) {
  }
}

export class CreateTenantFailureAction {
  readonly type = tenantActionsType.createTenantFailure;

  constructor(public payload: {}) {
  }
}

export class CreateUserAction {
  readonly type = tenantActionsType.createUser;

  constructor(public payload: { user: any, tenantId: any }) {
  }
}

export class CreateUserSuccessAction {
  readonly type = tenantActionsType.createUserSuccess;

  constructor() {
  }
}

export class CreateUserFailureAction {
  readonly type = tenantActionsType.createUserFailure;

  constructor(public payload: {}) {
  }
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

export class UpdateTenantAction implements Action {
  readonly type = tenantActionsType.updateTenant;

  constructor(public payload: {}) {
  }
}


export class UpdateTenantSuccessAction implements Action {
  readonly type = tenantActionsType.updateTenantSuccess;

  constructor(public payload: any) {
  }
}

export class UpdateTenantFailureAction implements Action {
  readonly type = tenantActionsType.updateTenantFailure;

  constructor(public payload: {}) {
  }
}

export class DeleteUserAction implements Action {
  readonly type = tenantActionsType.deleteUser;

  constructor(public payload: any) {
  }
}

export class DeleteUserSuccessAction implements Action {
  readonly type = tenantActionsType.deleteUserSuccess;

  constructor() {
  }
}

export class DeleteUserFailureAction implements Action {
  readonly type = tenantActionsType.deleteUserFailure;

  constructor(public payload: any) {
  }
}

export type TenantActions =
  GetTenantAction
  | DeleteUserAction
  | DeleteUserSuccessAction
  | DeleteUserFailureAction
  | GetTenantSuccessAction
  | GetOriginAction
  | GetOriginSuccessAction
  | GetOriginFailureAction
  | CreateTenantAction
  | CreateTenantSuccessAction
  | CreateTenantFailureAction
  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserFailureAction
  | DeleteTenantAction
  | DeleteTenantSuccessAction
  | DeleteTenantFailureAction
  | GetUsersAction
  | GetUsersSuccessAction
  | CleanAction
  | GetUsersFailureAction
  | SendMessageAction
  | SendMessageSuccessAction
  | SendMessageFailureAction
  | UpdateTenantAction
  | UpdateTenantSuccessAction
  | UpdateTenantFailureAction
  | GetTenantFailureAction;
