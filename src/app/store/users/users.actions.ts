import {Action} from '@ngrx/store';

export enum usersActionsType {
  users = '[USERS] get',
  usersSuccess = '[USERS] get success',
  usersFailure = '[USERS] get failure',
}

export class GetUsersAction implements Action {
  readonly type = usersActionsType.users;

  constructor(public payload: string) {
  }
}


export class GetUsersSuccessAction implements Action {
  readonly type = usersActionsType.usersSuccess;

  constructor(public payload: {}) {
  }
}

export class GetUsersFailureAction implements Action {
  readonly type = usersActionsType.usersFailure;

  constructor(public payload: {}) {
  }
}

export type UsersActions =
  GetUsersAction
  | GetUsersSuccessAction
  | GetUsersFailureAction;
